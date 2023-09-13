const express = require('express');
const app = express();
const cors = require("cors");

const connectDb = require('./01-database/connectDB.js');
const contactRoutes = require('./05-routes/01-contactRoutes.js')
const navbarRoutes = require('./05-routes/02-navbarRoutes.js')
const carouselRoutes = require('./05-routes/03-carouselRoutes.js')

const port = 8000;

connectDb()

app.use(express.json());
app.use(cors());

app.use("/", contactRoutes);
app.use("/", navbarRoutes);
app.use("/", carouselRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
