const mongoose = require('mongoose')

const asanasSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is required"]
  },
  photoURL: String,
  



})

const asanasModel = mongoose.model('asanas', asanasSchema)

module.exports = asanasModel