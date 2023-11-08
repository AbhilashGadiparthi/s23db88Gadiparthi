const mongoose = require("mongoose")
const HousesSchema = mongoose.Schema({
Houses_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("Houses",HousesSchema)