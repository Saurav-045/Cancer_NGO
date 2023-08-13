const mongoose = require('mongoose');

const {Schema} = mongoose;

const VolunteerSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    person:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('volunteer', VolunteerSchema);
//model is the one jiske through hum insert karwwaayenge user ka data. It is wrapper of Schema. CRUD operations can be done using Model 