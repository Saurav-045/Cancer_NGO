const mongoose=  require('mongoose');
// const mongoURI = 'mongodb+srv://gofood:saurav123@cluster0.1zvb5hr.mongodb.net/gofoodmern?retryWrites=true&w=majority'
const mongoURI = 'mongodb+srv://ngo:ngo123@cluster0.9hqhk5x.mongodb.net/ngo?retryWrites=true&w=majority';
// Connecting  mongoDB database await and async both are necessary 
//mongoDB is schema and mongoose is schema-less so we use mongoose for validation of data
const mongoDB = async() =>{
        try{
            await mongoose.connect(mongoURI, {useUnifiedTopology: true, useNewUrlParser: true});
            console.log("connected");
        } catch (error)
        {
            console.log("error found; ",error);
        }
    };  


module.exports = mongoDB;

