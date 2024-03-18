const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Package = require("./package");

const order = new Schema({
    idx: {
        type: Number,
        required: true
    },
    package: {
        type: String,
        required: true
    },
    MainImg: {
        type: String,
        required: true
    },
    pax: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    dateRegistration: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending'
    }
});

const Order = mongoose.model("Order", order);

module.exports = Order;
