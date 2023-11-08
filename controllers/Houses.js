var Houses = require('../models/Houses');
// List of all Houses
exports.Houses_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Houses list');
};
// for a specific Houses.
exports.Houses_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Houses detail: ' + req.params.id);
};
// Handle Houses create on POST.
exports.Houses_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Houses create POST');
};
// Handle Houses delete form on DELETE.
exports.Houses_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Houses delete DELETE ' + req.params.id);
};
// Handle Houses update form on PUT.
exports.Houses_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Houses update PUT' + req.params.id);
};