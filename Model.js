const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
        first_name: String,
        last_name: String,
        street: String,
        address: String,
        city: String,
        state: String,
        email: String,
        phone: Number

})

module.exports = mongoose.model("data",dataSchema)