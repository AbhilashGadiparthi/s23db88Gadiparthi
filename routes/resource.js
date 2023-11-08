var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Houses_controller = require('../controllers/Houses');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Houses ROUTES ///
// POST request for creating a Houses.
router.post('/Houses', Houses_controller.Houses_create_post);
// DELETE request to delete Houses.
router.delete('/Houses/:id', Houses_controller.Houses_delete);
// PUT request to update Houses.
router.put('/Houses/:id', Houses_controller.Houses_update_put);
// GET request for one Houses.
router.get('/Houses/:id', Houses_controller.Houses_detail);
// GET request for list of all Houses items.
router.get('/Houses', Houses_controller.Houses_list);
module.exports = router;