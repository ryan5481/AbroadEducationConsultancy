const mongoose = require('mongoose');
require('dotenv').config()

const connectDb = async ()=>{
  try {
    // console.log(process.env.MONGO_URI)
await mongoose.connect(process.env.MONGO_URI)
console.log('Connected to MongoDB');
}
  catch (error) {
    console.log(error);
  }
}

module.exports = connectDb

// const connectDb = async () => {
//   try {
//     mongoose.set('strictQuery', true);
//     const data = await mongoose.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/GoldenGateIntlEdu');
//     if (data) console.log("connected to monngodb")
//   } catch (err) {
//     console.log("Db Connection error", err)
//   }
// }