const express = require('express');
const router = express.Router();

const upload = require('../middlewares/manageFiles');
const {postImage, getImage, deleteImage} = require('../controllers/ImagesController');

//METER VERIFY TOKEN ANTES DE SUBIR A BITBUCKET
router.post('/', upload,  postImage);
router.get('/:id', getImage);
router.delete('/:id', deleteImage);

module.exports = router;