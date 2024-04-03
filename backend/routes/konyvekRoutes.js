const express = require('express');
const router = express.Router();
const {protect} = require('../middlewares/authMiddleware');

const {addKonyv, getKönyv, getSpecifiedKönyvid, getSpecifiedKönyvKategoria, getSpecifiedKönyvIro, getSpecifiedKönyvCim} = require('../controllers/konyvekController')

router.get('/all', protect, getKönyv);
router.post('/add', protect, addKonyv);
router.get('/:id', getSpecifiedKönyvid);
router.get('/:kategoria',getSpecifiedKönyvKategoria)
router.get('/:iro', getSpecifiedKönyvIro)
router.get('/:cim', getSpecifiedKönyvCim)

module.exports = router; 