const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/harleys')

mongoose.connection.on('connected', () => {
  console.log('mongoose connected')
})

mongoose.connection.on('error', (err) => {
  console.log('mongoose failed')
})

mongoose.connection.on('disconnected', () => {
  console.log('mongoose is disconnected')
})




