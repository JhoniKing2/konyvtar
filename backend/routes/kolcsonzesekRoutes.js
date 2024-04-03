const express = require('express');
const router = express.Router();
const {protect} = require('../middlewares/authMiddleware');

const {placeKolcsonzes, getkolcsonzes, getKolcsonzesid, getElerhetoKonyvek, putSingleKolcsonzes} = require('../controllers/kolcsonzesekContoller')


router.post('/order', protect, placeKolcsonzes)
router.post('/singleOrder', protect, putSingleKolcsonzes)
router.get('/kolcsonzeseim', protect, getkolcsonzes)
router.get('/elerheto', getElerhetoKonyvek)



module.exports = router;