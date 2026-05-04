const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  donorName: String,
  email: String,
  phone: String,
  itemType: String,
  quantity: String,
  address: String,
  pickupDate: Date,
}, { timestamps: true });

module.exports = mongoose.model("Donation", donationSchema);