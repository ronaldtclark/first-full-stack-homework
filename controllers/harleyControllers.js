const express = require('express')
const router = express.Router()

const Harleys = require('../models/harleys')


//INDEX
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

//CREATE
router.post('/', (req, res) => {
  Harleys.create(req.body, (err, createdHarley) => {
    if (err) {
      res.send(err)
    } else {
      res.redirect('/harleys')
    }
  })
})

//NEW
router.get('/new', (req, res) => {
  res.render('new.ejs')
})


//EDIT
router.get('/:id/edit', (req, res) => {
  Harleys.findById(req.params.id, (err, foundHarley) => {
    res.render('edit.ejs', {
      harley: foundHarley
    })
  })
})

//UPDATE
router.put('/:id', (req, res) => {
  Harleys.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedHarley) => {
    res.redirect('/harleys')
  })
})

//SHOW
router.get('/:id', (req, res) => {
  Harleys.findById(req.params.id, (err, foundHarley) => {
    res.render('show.ejs', {
      harley: foundHarley
    })
  })
})

//DELETE
router.delete('/:id', (req, res) => {
  Harleys.findByIdAndRemove(req.params.id, (err, deletedHarley) =>{
    res.redirect('/harleys')
  })
})

module.exports = router;