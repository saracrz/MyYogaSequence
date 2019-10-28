const mongoose = require('mongoose')

const sequenceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }

})

const sequenceModel = mongoose.model('sequence', sequenceSchema)

module.exports = sequenceModel