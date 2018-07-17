const express = require('express')
const router = express.Router()

const Harleys = require('../models/harleys')


// INDEX

router.get('/', (req, res) => {
  Harleys.find({}, (err, allHarleys) => {
    if(err) {
      console.log(err)
      res.send(err)
    } else {
      res.render('index.ejs', {
        harleys: allHarleys
      })
    }
  })
})








module.exports = router;