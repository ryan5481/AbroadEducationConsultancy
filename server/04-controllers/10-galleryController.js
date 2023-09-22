const Gallery = require("../02-models/10-gallerySchema");

 const AddGalleryImage = async (req, res) => {
  try {
    const reqInclImg = {
      ...req.body,
      galleryImage: req.file.filename,
    };
    // console.log(reqInclImg);
    const data = await Gallery.create(reqInclImg);
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

 const GetGalleryImages = async (req, res) => {
  try {
    const data = await Gallery.find();
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

 const UpdateGalleryImage = async (req, res) => {
  // console.log(req.params);
  try {
    const reqInclImg = {
      ...req.body,
      galleryImage: req.file.filename,
    };
    const data = await Gallery.findByIdAndUpdate(req.body._id, reqInclImg);
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

const DeleteGalleryImage = async (req, res) => {
  // console.log(req.params);
  try {
      const _id = req.params.id;
      console.log(req)
      const deletedImage = await Gallery.findByIdAndDelete(_id);

      if (!deletedImage) {
          return res.status(404).json({ message: 'Image not found' });
      }
    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
      console.error('Error deleting sector:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

exports.AddGalleryImage = AddGalleryImage
exports.GetGalleryImages = GetGalleryImages
exports.UpdateGalleryImage = UpdateGalleryImage
exports.DeleteGalleryImage = DeleteGalleryImage