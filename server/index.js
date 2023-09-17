const express = require('express');
const app = express();
const cors = require("cors");

const connectDb = require('./01-database/connectDB.js');

const contactRoutes = require('./05-routes/01-contactRoutes.js')
const logoRoutes = require('./05-routes/01.5-logoRoutes.js')
const navbarRoutes = require('./05-routes/02-navbarRoutes.js')
const carouselRoutes = require('./05-routes/03-carouselRoutes.js')
const servicesRoutes = require('./05-routes/04-servicesRoutes.js')
const aboutUsRoutes = require('./05-routes/05-aboutUsRoutes.js')
const articleRoutes = require('./05-routes/06-articleRoutes.js')
const countryArticleRoutes = require('./05-routes/07-countryArticleRoutes.js')
const testimonyRoutes = require('./05-routes/08-testimonyRoutes.js')

const port = 8000;

connectDb()

app.use(express.json());
app.use(cors());

app.use("/", contactRoutes);
app.use("/", logoRoutes);
app.use("/", navbarRoutes);
app.use("/", carouselRoutes);
app.use("/", servicesRoutes);
app.use("/", aboutUsRoutes);
app.use("/", articleRoutes);
app.use("/", countryArticleRoutes);
app.use("/", testimonyRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
