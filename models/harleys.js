const mongoose = require('mongoose')

const harleySchema = new mongoose.Schema ({
  name: String,
  engine: String,
  torque: Number,
  weight: Number
})

module.exports = mongoose.model('Harleys', harleySchema)