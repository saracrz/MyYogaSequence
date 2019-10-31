const mongoose = require('mongoose')

const sequenceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  comments : {
    type : String,
    minlength : [25 , "Minimum 25 characters"],
    required: [true, 'Comments is required']
  },
  asanas : [{

      type: mongoose.Schema.Types.ObjectId,
      ref: 'asanas'
  }

  ]


})

const sequenceModel = mongoose.model('sequence', sequenceSchema)

module.exports = sequenceModel