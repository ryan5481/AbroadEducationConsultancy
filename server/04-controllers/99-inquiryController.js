const Inquiry = require("../02-models/99-inquirySchema.js");

 const SubmitInquiry = async (req, res) => {
  try {
    const data = await Inquiry.create(req.body);
    // console.log(req.body);
    if (data) {
      res.status(200).json({
        msg: "Message added."
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

 const GetInquiries = async (req, res) => {
  try {
    const data = await Inquiry.find();
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

const DeleteInquiry = async (req, res) => {
  // console.log(req.params);
  try {
      const _id = req.params.id;
      // console.log(req)
      const deletedImage = await Inquiry.findByIdAndDelete(_id);

      if (!deletedImage) {
          return res.status(404).json({ message: 'Data not found' });
      }
    res.status(200).json({ message: 'Inquiry message deleted successfully' });
  } catch (error) {
      console.error('Error deleting sector:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

exports.SubmitInquiry = SubmitInquiry
exports.GetInquiries = GetInquiries
exports.DeleteInquiry = DeleteInquiry