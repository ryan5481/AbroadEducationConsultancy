const mongoose = require('mongoose');


const connectDb = async ()=>{
  try {
    console.log(process.env.MONGO_URI)
await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://ryan:Password%401234@cluster0.bstxwvk.mongodb.net/")
console.log('MongoDB working');
  // Start using the database
}
  catch (error) {
    console.log(error);
  }
}

// const connectDb = async () => {
//   try {
//     mongoose.set('strictQuery', true);
//     const data = await mongoose.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/GoldenGateIntlEdu');
//     if (data) console.log("connected to monngodb")
//   } catch (err) {
//     console.log("Db Connection error", err)
//   }
// }

module.exports = connectDb