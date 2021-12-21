const express = require('express');
const router = express.Router();

const {
  getAllPurchases,
  createNewPurchases,
  changePurchases,
  deletePurchases
} = require('../controllers/task.controller');

// Tasks routes
router.get('/allPurchases', getAllPurchases);
router.post('/createPurchases', createNewPurchases);
router.patch('/updatePurchases', changePurchases);
router.delete('/deletePurchases', deletePurchases);

//User routes

module.exports = router;