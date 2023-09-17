const Testimony = require("../02-models/08-testimonySchema.js");

 const AddTestimonyImage = async (req, res) => {
  try {
    const reqInclImg = {
      ...req.body,
      testimonyImage: req.file.filename,
    };
    const data = await Testimony.create(reqInclImg);
    // console.log(req.body);
    if (data) {
      res.status(200).json({
        msg: "Data added."
      });
    } else {
      res.status(200).json({
        msg: "Failed to add data."
      });
    }
  } catch (e) {
    console.log(e);
  }
};

 const GetTestimonyImages = async (req, res) => {
  try {
    const data = await Testimony.find();
    // console.log(allUsersPosts);
    if (data) {
      res.json({ 
        data
      });
    }else {
      res.status(200).json({
        msg: "Failed fetch data."
      });
    }
  } catch (e) {
    console.log(e);
  }
};

 const UpdateTestimonyImage = async (req, res) => {
  // console.log(req.params);
  try {
    const reqInclImg = {
      ...req.body,
      testimonyImage: req.file.filename,
    };
    const data = await Testimony.findByIdAndUpdate(req.body._id, reqInclImg);
    // console.log(userIdsPosts);
    if (data) {
      res.json({
        msg: "Data updated."
      });
    } else {
      res.json({
        msg: "Error updating data",
      });
    }
  } catch (e) {
    console.log(e);
  }
};

// const DeleteCarouselImage = async (req, res) => {
//   // console.log(req.params);
//   try {
//       const _id = req.params.id;
//       console.log(req)
//       const deletedImage = await Carousel.findByIdAndDelete(_id);

//       if (!deletedImage) {
//           return res.status(404).json({ message: 'Image not found' });
//       }
//     res.status(200).json({ message: 'Image deleted successfully' });
//   } catch (error) {
//       console.error('Error deleting sector:', error);
//       res.status(500).json({ message: 'Internal server error' });
//   }
// };

exports.AddTestimonyImage = AddTestimonyImage
exports.GetTestimonyImages = GetTestimonyImages
exports.UpdateTestimonyImage = UpdateTestimonyImage
// exports.DeleteCarouselImage = DeleteCarouselImage