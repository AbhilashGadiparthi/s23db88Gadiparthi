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

// List of all Costumes
exports.Houses_list = async function(req, res) {
    try{
    theHouses = await Houses.find();
    res.send(theHouses);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// VIEWS
// Handle a show all view
exports.Houses_view_all_Page = async function(req, res) {
    try{
    theHouses = await Houses.find();
    res.render('Houses', { title: 'Houses Search Results', results: theHouses });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// Handle Costume create on POST.
exports.Houses_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Houses();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.house_name = req.body.house_name;
    document.house_size = req.body.house_size;
    document.house_price = req.body.house_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };