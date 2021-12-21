const mongoose = require("mongoose");

const { Schema } = mongoose;

const shopingListScheme = new Schema({
    purchases: String,
    sum: Number,
    date: Date,
  });

module.exports = shopingList = mongoose.model('shopingList', shopingListScheme);