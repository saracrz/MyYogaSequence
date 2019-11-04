const SequenceModel = require('../models/sequence.model')

module.exports = {
  getAllSequences,
  getSequenceById,
  deleteSequenceById,
  createSequence,
  updateSequence
}

function getAllSequences(req, res) {
  SequenceModel
    .find({owner: res.locals.user._id})
    .then(response => res.json(response))
    .catch((err) => handdleError(err, res))
}


function getSequenceById(req, res) {
  SequenceModel
    .findById(req.params.id)
    .populate('asanas')
    .then(response => res.json(response))
    .catch((err) => handdleError(err, res))
}

function createSequence(req, res) {
  SequenceModel
    .create({
      name: req.body.name,
      comments: req.body.comments,
      owner: res.locals.user._id,
      asanas : req.body.asanas
    })
    .then(response => res.json(response))
    .catch((err) => handdleError(err, res))
}

function deleteSequenceById(req, res) {
  SequenceModel
    .remove({
      _id: req.params.id
    })
    .then(response => res.json(response))
    .catch(err => handdleError(err, res))
}

function updateSequence(req, res) {
  SequenceModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handdleError(err, res))
}

function handdleError(err, res) {
  return res.status(400).json(err)
}