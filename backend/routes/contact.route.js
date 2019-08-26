const express = require('express');
const app = express();
const contactRoute = express.Router();

// Contact model
let Contact = require('../models/Contacts');

// Add Contact
contactRoute.route('/create').post((req, res, next) => {
  Contact.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Contacts
contactRoute.route('/').get((req, res) => {
  Contact.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single contact
contactRoute.route('/read/:id').get((req, res) => {
  Contact.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update contact
contactRoute.route('/update/:id').put((req, res, next) => {
  Contact.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete contact
contactRoute.route('/delete/:id').delete((req, res, next) => {
  Contact.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = contactRoute;