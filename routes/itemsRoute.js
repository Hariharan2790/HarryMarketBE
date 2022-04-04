const express = require("express");
const itemModel = require("../models/itemsModel");
const router = express.Router();

router.get("/getallitems", async (req, res) => {
  try {
    const items = await itemModel.find();
    res.send(items);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/additem", async (req, res) => {
  try {
    const newItem = new itemModel(req.body);
    await newItem.save();
    res.status(201).send("Item added successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/edititem", async (req, res) => {
  try {
    await itemModel.findOneAndUpdate({ _id: req.body.itemId }, req.body);
    res.status(201).send("Item edited successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/deleteitem", async (req, res) => {
  try {
    await itemModel.findOneAndDelete({ _id: req.body.itemId });
    res.status(201).send("Item deleted successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
