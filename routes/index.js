const { Router } = require("express");
const User = require("../model/user");
const Package = require("../model/package");
const Order = require('../model/order');
const jwt = require("jsonwebtoken");
const { SECRET, MAX_AGE } = require("../consts")
const midtransClient = require('midtrans-client');
const { requireLogin } = require("../middleware/authentication");
const { requireAdmin } = require("../middleware/authentication");

const router = Router();

const createJwt = (payload) => {
    return jwt.sign({ payload }, SECRET, { expiresIn: MAX_AGE });
}

/**
 * @route POST api/users/login
 * @desc Login user
 * @access Public
 */
router.post("/admin", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email, password: password })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: "failed", error: "wrong-credentials" });
            }
            const maxAge = 3 * 24 * 60 * 60
            const token = createJwt(user._id, maxAge);
            res.cookie("auth", token, { httpOnly: true, maxAge: maxAge * 10 });
            return res.status(200).json({ message: "success", data: user })
        })
        .catch(err => {
            return res.status(400).json({ message: "failed", err })
        });
});

/**
 * @route GET api/users
 * @desc Get authenticated user
 * @access Private
 */
router.get("/admin/dashboard", requireLogin, requireAdmin, (req, res) => {
    const token = req.cookies.auth;
    const _id = jwt.verify(token, SECRET).payload;
    User.findOne({ _id }, { username: 1, email: 1, registrationDate: 1 })
        .then(user => {
            return res.status(200).json({ message: "success", data: user })
        })
        .catch((err) => {
            console.log(err);
            return res.status(401).json({ message: "error", code: "unauthenticated-access" });
        })
});

router.get("/packages", (req, res) => {
    Package.find()
        .then((packagesList) => {
            const formattedData = packagesList.map((packages) => {
                return {
                    idx: packages.idx,
                    MainImg: packages.MainImg,
                    img: packages.img,
                    name: packages.name,
                    details: packages.details,
                    price: packages.price
                };
            });

            return res.status(200).json({ message: "success", data: formattedData });
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({ message: "error", error: "internal-server-error" });
        });
});

/**
 * @route GET /usersList
 * @desc Get authenticated user
 * @access Private
 */
router.get(`/packages/:idx`, (req, res) => {
    const idx = req.params.idx;
    Package.findOne({ idx: idx })
        .then((packagesList) => {
            const formattedData = {
                idx: packagesList.idx,
                MainImg: packagesList.MainImg,
                img: packagesList.img,
                name: packagesList.name,
                details: packagesList.details,
                price: packagesList.price
            }
            return res.status(200).json({ message: "success", data: formattedData });
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({ message: "error", error: "internal-server-error" });
        });
})

router.post("/order", async (req, res) => {
    try {
        const { packageName, pax, price, firstName, lastName, email, phone } = req.body;

        const lastOrder = await Order.findOne().sort({ idx: -1 });
        const idx = lastOrder ? lastOrder.idx + 1 : 1;

        const newOrder = new Order({
            idx: idx,
            package: packageName,
            price: price * pax,
            pax: pax,
            status: 'pending',
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
        });

        await newOrder.save();

        return res.status(200).json({ message: "Order placed successfully", data: newOrder });
    } catch (error) {
        console.error('Error placing order:', error);
        return res.status(500).json({ message: "Failed to place order", error: error.message });
    }
});


router.get("/packages/:idx/order/:idx", async (req, res) => {
    try {
        const orderIdx = req.params.idx;
        const order = await Order.findOne({ idx: orderIdx });

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        return res.status(200).json({ message: "Order retrieved successfully", data: order });
    } catch (error) {
        console.error('Error retrieving order:', error);
        return res.status(500).json({ message: "Failed to retrieve order", error: error.message });
    }
});

let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.EXPRESS_SERVER_KEY || '',
    clientKey: process.env.EXPRESS_SERVER_KEY || ''
});

router.post("/midtrans/createTransaction", async (req, res) => {
    try {
        const { id, idx, packageName, price, dp, pax, firstName, lastName, phone, email, total } = req.body;

        let parameter = {
            "transaction_details": {
                "order_id": id,
                "packageName": packageName,
                "gross_amount": total,
            },
            "item_details": {
                "id": idx,
                "price": price,
                "quantity": pax,
                "name": packageName
            },
            "customer_details": {
                "first_name": firstName,
                "last_name": lastName,
                "phone": phone,
                "email": email
            }
        };

        const token = await snap.createTransaction(parameter);
        console.log('transactionToken:', token);
        return res.status(200).json({ message: "Transaction created successfully", data: token });
    } catch (error) {
        console.error('Error creating transaction:', error);
        return res.status(500).json({ message: "Failed to create transaction", error: error.message });
    }
});

router.post("/midtrans/createTransaction/dp", async (req, res) => {
    try {
        const { id, idx, packageName, price, dp, pax, firstName, lastName, phone, email } = req.body;

        let parameter = {
            "transaction_details": {
                "order_id": id,
                "packageName": packageName,
                "gross_amount": dp,
            },
            "item_details": {
                "id": idx,
                "price": price,
                "quantity": pax,
                "name": packageName
            },
            "customer_details": {
                "first_name": firstName,
                "last_name": lastName,
                "phone": phone,
                "email": email
            }
        };

        const token = await snap.createTransaction(parameter);
        console.log('transactionToken:', token);
        return res.status(200).json({ message: "Transaction created successfully", data: token });
    } catch (error) {
        console.error('Error creating transaction:', error);
        return res.status(500).json({ message: "Failed to create transaction", error: error.message });
    }
});


module.exports = router;















// /**
//  * @route POST api/users/register
//  * @desc Register new user
//  * @access Private
//  */
// router.post("/users/register", (req, res) => {
//     const { username, email, password } = req.body;
//     User.create({ username, email, password })
//         .then(() => {
//             return res.status(200).json({ message: "success" })
//         })
//         .catch(error => {
//             console.log(error);
//             return res.status(400).json({ message: "failed", error })
//         });
// });

// /**
//  * @route POST api/users/login
//  * @desc Login user
//  * @access Public
//  */
// router.post("/users/login", (req, res) => {
//     const { email, password } = req.body;
//     User.findOne({ email: email, password: password })
//         .then(user => {
//             if (!user) {
//                 return res.status(401).json({ message: "failed", error: "wrong-credentials" });
//             }
//             const maxAge = 3 * 24 * 60 * 60
//             const token = createJwt(user._id, maxAge);
//             res.cookie("auth", token, { httpOnly: true, maxAge: maxAge * 10 });
//             return res.status(200).json({ message: "success", data: user })
//         })
//         .catch(err => {
//             return res.status(400).json({ message: "failed", err })
//         });
// });


// /**
//  * @route POST api/users/logout
//  * @desc Log user out
//  * @access Public
//  */
// router.post("/users/logout", (req, res) => {
//     res.clearCookie("auth");
//     return res.status(200).json({ message: "success" })
// });

// /**
//  * @route GET /usersList
//  * @desc Get authenticated user
//  * @access Private
//  */
// router.get("/userList", requireLogin, requireAdmin, async (req, res) => {
//     User.find()
//         .then((userList) => {
//             const formattedData = userList.map((user) => {
//                 return {
//                     username: user.username,
//                     email: user.email,
//                     password: user.password,
//                     date: user.registrationDate,
//                 };
//             });

//             return res.status(200).json({ message: "success", data: formattedData });
//         })
//         .catch((err) => {
//             console.log(err);
//             return res.status(500).json({ message: "error", error: "internal-server-error" });
//         });
// });
