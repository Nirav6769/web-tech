const express = require('express');
const router = express.Router();

router.post('/create', (req, res) => {
  console.log("New Order:", req.body);
  res.json({ message: "Order Received" });
});

module.exports = router;
