const Donation = require("../models/Donation");

const createDonation = async (req, res) => {
  try {
    const saved = await new Donation(req.body).save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getDonations = async (req, res) => {
  try {
    const data = await Donation.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteDonation = async (req, res) => {
  try {
    await Donation.findByIdAndDelete(req.params.id);
    res.json({ message: "Donation deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createDonation,
  getDonations,
  deleteDonation,
};