const mongoose = require("mongoose");

const billsSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    customerPhoneNumber: {
      type: String,
      required: true,
    },
    grandTotal: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    subTotal: {
      type: Number,
      required: true,
    },
    paymentMode:{
        type: String,
        required: true,
      },
      cartItems: {
          type : Array,
          required: true,
      }
  },
  { timestamps: true }
);

const billModel = mongoose.model("bills", billsSchema);

module.exports = billModel;
