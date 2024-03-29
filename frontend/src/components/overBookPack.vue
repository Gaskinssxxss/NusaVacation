<template>
    <div v-show="tru" class=" fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
        <div v-show="form" class="h-40 relative">
            <div class="bg-black -mt-48">
                <div class="flex justify-between px-10 py-2 bg-ocean border-[3px] border-black relative -top-2 -left-2">
                    <div class=" text-sunny font-Karantina text-3xl">
                        <h1>Booking Form!</h1>
                    </div>
                    <div @click="fals" class="pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6 stroke-[5px] stroke-sunny transition-transform duration-300 ease-in-out transform hover:scale-125">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div v-show="packageDatas"
                    class="py-4 px-10 shadow-md bg-sunny border-[3px] border-black relative -top-2 -left-2">
                    <div>
                        <div class="pt-4 pb-1">
                            <label class="block text-black text-xl font-Karantina" for="">Package
                                Selected</label>
                            <div>
                                <div>
                                    <div>
                                        <div class="bg-sunny border-2 border-black pl-2 py-2 flex justify-between">
                                            <div>
                                                <h1 v-if="!select" class="text-xl font-Karantina capitalize">
                                                    {{ packy }}
                                                </h1>
                                                <h1 v-else class="text-xl font-Karantina capitalize">
                                                    {{ selectedPackage }}
                                                </h1>
                                            </div>
                                            <div v-show="down" @click="downer" class="pr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="w-6 h-6 mx-auto stroke-2 stroke-black transition-transform duration-300 ease-in-out transform hover:scale-125">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                                                </svg>
                                            </div>
                                            <div v-show="up" @click="upper" class="pr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor"
                                                    class="w-6 h-6 mx-auto stroke-2 stroke-black transition-transform duration-300 ease-in-out transform hover:scale-125">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-show="pack" v-for="packagex in packageList" :key="packagex._id"
                                        class="transition-transform duration-300 ease-in-out transform hover:scale-110">
                                        <h1 @click="select(packagex)"
                                            class="bg-sunny border-2 border-black pl-2 text-xl font-Karantina py-2 capitalize">
                                            {{ packagex.name }}</h1>
                                    </div>
                                </div>
                            </div>
                            <div v-show="err">
                                <h1 class="text-xl font-Karantina text-red-700">Please select a package!!!</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="pb-4 pt-1">
                            <label class="block text-black text-xl font-Karantina" for="">Pax</label>
                            <div class="w-28">
                                <div class="bg-sunny border-2 border-black">
                                    <div class="flex">
                                        <vue-number-input v-model="pax" :min="1" :max="50" :model-value="0" size="small"
                                            inline controls
                                            class="w-28 h-8 font-saira text-black bg-sunny"></vue-number-input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="block text-black text-xl font-Karantina" for="">Price</label>
                            <div>
                                <h1
                                    class=" bg-sunny w-[450px] pl-2 font-saira font-normal text-xl pt-1 h-10 border-2 border-black">
                                    Rp. {{ packagePrice }}
                                </h1>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="block text-black text-xl font-Karantina">Total Price</label>
                            <div>
                                <h1
                                    class=" bg-sunny w-[450px] pl-2 font-saira font-normal text-xl pt-1 h-10 border-2 border-black">
                                    Rp. {{ pax * packagePrice }}
                                </h1>
                            </div>
                        </div>
                        <div class="my-4 pt-4 flex justify-end">
                            <div
                                class="bg-black w-[150px] transition-transform duration-300 ease-in-out transform hover:scale-110">
                                <button @click="change"
                                    class="relative -top-2 -left-2 w-full bg-sunny h-10 border-2 border-black">
                                    <h1 class="font-Karantina font-bold text-2xl">Next!</h1>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-show="userDatas">
                    <div class="py-4 px-10 shadow-md bg-sunny border-[3px] border-black relative -top-2 -left-2">
                        <div class="mb-1">
                            <label class="block -mb-1 text-black text-xl font-Karantina">First Name</label>
                            <input type="text" v-model="firstName"
                                class="border font-saira font-normal border-black inline-block py-1 px-3 w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
                        </div>
                        <div class="mb-1">
                            <label class="block -mb-1 text-black text-xl font-Karantina">Last Name</label>
                            <input type="text" v-model="lastName"
                                class="border font-saira font-normal border-black inline-block py-1 px-3 w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
                        </div>
                        <div class="mb-1">
                            <label class="block -mb-1 text-black text-xl font-Karantina">Email</label>
                            <input type="text" v-model="email"
                                class="border font-saira font-normal border-black inline-block py-1 px-3 w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
                        </div>
                        <div class="mb-1">
                            <label class="block -mb-1 text-black text-xl font-Karantina">Phone</label>
                            <input type="text" v-model="phone"
                                class="border font-saira font-normal border-black inline-block py-1 px-3 w-[450px] h-8 text-black text-lg tracking-wider bg-sunny" />
                        </div>
                        <div class="flex justify-around space-x-8 pb-4">
                            <div
                                class="bg-black mt-10 ml-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
                                <button @click="prev" class="border-2 border-black w-[150px] text-center px-4 py-2 text-xl bg-sunny shadow-md text-black relative
                                -top-2 -left-2">
                                    <h1 class="font-Karantina">
                                        Prev
                                    </h1>
                                </button>
                            </div>
                            <div
                                class="bg-black mt-10 ml-2 transition-transform duration-300 ease-in-out transform hover:scale-110">
                                <button @click="order" class="border-2 border-black w-[250px] text-center px-4 py-2 text-xl bg-sunny shadow-md text-black relative
                                -top-2 -left-2">
                                    <h1 @click="pay" class="font-Karantina">
                                        Pay
                                    </h1>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Api from "@/services/api";

function generateUniqueOrderID() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2)
    const day = ('0' + currentDate.getDate()).slice(-2);
    const randomVariable1 = Math.floor(Math.random() * 1000);
    const randomVariable2 = Math.floor(Math.random() * 100);

    const uniqueID = `${year}${month}${day}-${randomVariable1}-${randomVariable2}`;

    return uniqueID;
}

export default {
    data() {
        return {
            packageList: [],
            packy: "Package Name",
            selectedPackage: null,
            packagePrice: null,
            tru: true,
            pack: false,
            down: true,
            up: false,
            pax: null,
            packageDatas: true,
            userDatas: false,
            err: false,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            form: true,
        }
    },
    mounted() {
        this.packageData();
    },
    methods: {
        async pay() {
            const datas = {
                id: generateUniqueOrderID(),
                idx: this.packageList.idx,
                packageName: this.selectedPackage,
                price: this.packagePrice,
                pax: this.pax,
                firstName: this.firstName,
                lastName: this.lastName,
                phone: this.phone,
                email: this.email,
                total: this.pax * this.packagePrice
            };

            try {
                const rezz = await Api.post("midtrans/createTransaction", datas);
                const responseData = await rezz;
                console.log(" tokenya adalah : " + responseData.data.data.token);
                console.log("ini redirect url nya : " + responseData.data.data.redirect_url);
                this.openPaymentPopup(responseData.data.data.redirect_url);
            } catch (error) {
                console.error('Error making payment:', error);
            }
            this.tru = false;
        },
        openPaymentPopup(url) {
            const width = 600;
            const height = 600;
            const left = (window.innerWidth - width) / 2;
            const top = (window.innerHeight - height) / 2;
            const popupParams = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`;

            const paymentWindow = window.open(url, '_blank', popupParams);
            if (!paymentWindow || paymentWindow.closed || typeof paymentWindow.closed === 'undefined') {
                alert('Pop-up window blocked. Please enable pop-ups for this website.');
            }
        },
        async order() {
            try {
                const orderData = {
                    packageName: this.selectedPackage,
                    pax: this.pax,
                    price: this.packagePrice,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    phone: this.phone
                };

                const response = await Api.post('order', orderData);

                console.log(response.data);

            } catch (error) {
                console.error('Error placing order:', error);
            }
            this.tru = false;
        },
        fals() {
            this.tru = false
        },
        change() {
            if (this.selectedPackage === null) {
                this.packageDatas = true,
                    this.userDatas = false,
                    this.err = true
            } else {
                this.packageDatas = false,
                    this.userDatas = true
                this.err = false
            }
        },
        prev() {
            this.packageDatas = true,
                this.userDatas = false
        },
        select(packagex) {
            const totalPrice = this.pax * packagex.price;
            this.totalPrice = totalPrice;

            this.selectedPackage = packagex.name;
            this.packagePrice = packagex.price;

            this.pack = false;
            this.down = true;
            this.up = false;
        },
        async packageData() {
            try {
                const response = await Api.get('packages');
                this.packageList = response.data.data.map(packages => ({
                    ...packages,
                }));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        downer() {
            this.pack = true,
                this.down = false,
                this.up = true
        },
        upper() {
            this.pack = false,
                this.down = true,
                this.up = false
        }
    }
}
</script>