const AsanasModel = require('../models/asanas.model')

module.exports = {
  getAllAsanas,
  getAsanaById,
  createAsana,
  deleteAsanaById,
  updateAsana
}

function getAllAsanas(req, res) {
  AsanasModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handdleError(err, res))
}

function getAsanaById(req, res) {
  AsanasModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handdleError(err, res))
}

function createAsana(req, res) {
  AsanasModel
    .create(req.body)
    .then(response => res.json(response))
    .catch((err) => handdleError(err, res))
}

function deleteAsanaById(req, res) {
  AsanasModel
    .remove({
      _id: req.params.id
    })
    .then(response => res.json(response))
    .catch(err => handdleError(err, res))
}

function updateAsana(req, res) {
  AsanasModel
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