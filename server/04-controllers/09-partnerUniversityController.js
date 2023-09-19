const PartnerUniveristy = require("../02-models/09-partnerUniveristySchema.js")

 const AddPartnerUniverisityLogo = async (req, res) => {
  try {
    const reqInclImg = {
      ...req.body,
      partnerUniversityLogo: req.file.filename,
    };
    const data = await PartnerUniveristy.create(reqInclImg);
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

 const GetPartnerUniverisityLogos = async (req, res) => {
  try {
    const data = await PartnerUniveristy.find();
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

 const UpdatePartnerUniverisityLogo = async (req, res) => {
  // console.log(req.params);
  try {
    const reqInclImg = {
      ...req.body,
      partnerUniversityLogo: req.file.filename,
    };
    const data = await PartnerUniveristy.findByIdAndUpdate(req.body._id, reqInclImg);
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

const DeletePartnerUniverisityLogo = async (req, res) => {
  // console.log(req.params);
  try {
      const _id = req.params.id;
      console.log(req)
      const deletedImage = await PartnerUniveristy.findByIdAndDelete(_id);

      if (!deletedImage) {
          return res.status(404).json({ message: 'Image not found' });
      }
    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
      console.error('Error deleting sector:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

exports.AddPartnerUniverisityLogo = AddPartnerUniverisityLogo
exports.GetPartnerUniverisityLogos = GetPartnerUniverisityLogos
exports.UpdatePartnerUniverisityLogo = UpdatePartnerUniverisityLogo
exports.DeletePartnerUniverisityLogo = DeletePartnerUniverisityLogo