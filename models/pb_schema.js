const mongoose = require("mongoose")

const pbSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    budget: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 6
    }
}, {collection: 'personal_budget_collection'})

module.exports = mongoose.model('personal_budget_collection', pbSchema)