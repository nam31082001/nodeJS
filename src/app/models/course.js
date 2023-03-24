const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Course = new Schema(
    {
       
        content: { type: String, require: true },
        start: { type: String, require: true },
        end: { type: String, require: true },
    },
    {
        timestamps: false,
       
       
    }
)

module.exports = mongoose.model('Course', Course)