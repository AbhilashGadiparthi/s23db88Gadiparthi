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

// Handle Costume update form on PUT.
exports.Houses_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Houses.findById( req.params.id)
 // Do updates of properties
 if(req.body.costume_type)
 toUpdate.Houses_type = req.body.Houses_type;
 if(req.body.cost) toUpdate.cost = req.body.cost;
 if(req.body.size) toUpdate.size = req.body.size;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};
