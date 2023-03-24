const express = require('express');
const router = express.Router();

const SiteController=require('../app/controllers/siteRoute')

router.get('/:id/edit', SiteController.edit);
router.delete('/:id', SiteController.delete);
router.post('/stor',SiteController.stor)
router.get('/',SiteController.index)

module.exports = router;