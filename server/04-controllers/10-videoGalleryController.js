const VideoGallery = require("../02-models/10-videoGallerySchema");

 const AddYouTubeVideoUrl = async (req, res) => {
  try {
    // console.log(reqInclImg);
    const data = await VideoGallery.create(req.body);
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

 const GetYouTubeVideoUrls = async (req, res) => {
  try {
    const data = await VideoGallery.find();
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

 const UpdateYouTubeVideoUrl = async (req, res) => {
  // console.log(req.params);
  try {
    
    const data = await VideoGallery.findByIdAndUpdate(req.body._id, req.body);
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

const DeleteYouTubeVideoUrl = async (req, res) => {
  // console.log(req.params);
  try {
      const _id = req.params.id;
      console.log(req)
      const deletedUrl = await VideoGallery.findByIdAndDelete(_id);

      if (!deletedUrl) {
          return res.status(404).json({ message: 'Video source url not found' });
      }
    res.status(200).json({ message: 'Video source deleted successfully' });
  } catch (error) {
      console.error('Error deleting sector:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

exports.AddYouTubeVideoUrl = AddYouTubeVideoUrl
exports.GetYouTubeVideoUrls = GetYouTubeVideoUrls
exports.UpdateYouTubeVideoUrl = UpdateYouTubeVideoUrl
exports.DeleteYouTubeVideoUrl = DeleteYouTubeVideoUrl