const express = require('express');
const router = express.Router();
const {protect} = require('../middlewares/authMiddleware');


const {register, login ,getKolcsonzo} = require('../controllers/kolcsonzoController');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect,getKolcsonzo )

module.exports = router;