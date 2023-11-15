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
 // Handle Costume delete on DELETE.
   exports.Houses_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Houses.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   }
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

   // for a specific Costume.
exports.Houses_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Houses.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

   // Handle Costume update form on PUT.
exports.Houses_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Houses.findById( req.params.id)
    // Do updates of properties
    if(req.body.house_name)
    toUpdate.house_name = req.body.house_name;
    if(req.body.house_size ) toUpdate.house_size = req.body.house_size;
    if(req.body.house_price) toUpdate.house_price = req.body.house_price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
   };

   // Handle a show one view with id specified by query
exports.Houses_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Houses.findById( req.query.id)
    res.render('Housesdetail', 
   { title: 'Houses Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   }

  