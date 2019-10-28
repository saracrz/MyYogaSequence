const mongoose = require('mongoose')

const asanasSchema = new mongoose.Schema({
  name: {
    type: String,
    photoURL: String,
    require: [true, "Name is required"]
  }


})

const asanasModel = mongoose.model('asanas', asanasSchema)

module.exports = asanasModel