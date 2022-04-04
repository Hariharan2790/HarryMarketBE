const express = require("express");
const billModel = require("../models/billModel");
const router = express.Router();

router.post("/chargebill", async (req, res) => {
  try {
    const newBill = new billModel(req.body);
    await newBill.save();
    res.status(201).send("Bill generated successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/getallbills", async (req, res) => {
  try {
    const bills = await billModel.find();
    res.send(bills);
    res.send("Bill generated successfully");
  } catch (error) {
    return;
    res.status(400).json(error);
   
  }
});

module.exports = router;
