const Services = require("../02-models/04-servicesSchema.js");

const AddServiceImage = async (req, res) => {
  try {
    if (req.file) {
      const reqInclImg = {
        ...req.body,
        serviceImage: req.file.filename,
      };

      const data = await Services.create(reqInclImg);
      if (data) {
        res.status(200).json({
          msg: "Data added."
        });
      } else {
        res.status(200).json({
          msg: "Failed to add data."
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
};

const GetServiceImages = async (req, res) => {
  try {
    const data = await Services.find();
    if (data) {
      res.json({
        data
      });
    } else {
      res.status(200).json({
        msg: "Failed fetch data."
      });
    }
  } catch (e) {
    console.log(e);
  }
};

const UpdateServiceImage = async (req, res) => {
  try {

    if (req.file) {
      const reqInclImg = {
        ...req.body,
        serviceImage: req.file.filename,
      };

      const data = await Services.findByIdAndUpdate(req.body._id, reqInclImg);
      if (data) {
        res.json({
          msg: "Data updated."
        });
      } else {
        res.json({
          msg: "Error updating data",
        });
      }
    } else {
      const data = await Services.findByIdAndUpdate(req.body._id, req.body)
      if (data) {
        res.status(200).json({
          msg: "Changes updated successfully.",
        })
      } else {
        res.status(403).json({
          msg: "Failed to update changes."
        })
      }
    }
  } catch (e) {
    console.log(e);
  }
};

const DeleteServiceImage = async (req, res) => {
  console.log(req.params);
  try {
    const id = req.params.id
    const deletedImage = await Services.findByIdAndDelete(id);

    if (!deletedImage) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting sector:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.AddServiceImage = AddServiceImage
exports.GetServiceImages = GetServiceImages
exports.UpdateServiceImage = UpdateServiceImage
exports.DeleteServiceImage = DeleteServiceImage
