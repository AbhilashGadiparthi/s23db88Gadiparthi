const mongoose = require("mongoose")
const HousesSchema = mongoose.Schema({
    house_name: {
        type: String,
        required: true
    },
    house_size: {
        type: String,
        required: true
    },
    house_price: {
        type: Number,
        required: true,
        min: 0,
        max: 3000000
    }
})
module.exports = mongoose.model("Houses",HousesSchema)