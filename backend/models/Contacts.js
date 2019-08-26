const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Contact = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   designation: {
      type: String
   },
   whatsappNumber: {
      type: Number
   },
   phoneNumber: {
      type: Number
   }
}, {
   collection: 'contacts'
})

module.exports = mongoose.model('Contact', Contact)