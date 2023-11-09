const mongoose = require("mongoose")
const HousesSchema = mongoose.Schema({
house_name: String,
house_size: String,
house_price: Number
})
module.exports = mongoose.model("Houses",HousesSchema)