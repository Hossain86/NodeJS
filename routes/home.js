const express = require('express');
const router = express.Router(); // ✅ Use Router()

// Define routes
router.get('/', (req, res) => {
  res.send('Hello from home route!');
});

module.exports = router; // ✅ Export router, NOT app
