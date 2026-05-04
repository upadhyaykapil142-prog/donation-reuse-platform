const express = require("express");
const router = express.Router();

const {
  createDonation,
  getDonations,
  deleteDonation,
} = require("../controllers/donationController");

router.post("/", createDonation);
router.get("/", getDonations);
router.delete("/:id", deleteDonation);

module.exports = router;