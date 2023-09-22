const TestPrep = require("../02-models/11-testPrepSchema")

const PostArticle = async (req, res) => {
    try {
        if (req.file) {
            const reqInclImg = {
                ...req.body,
                articleImage: req.file.filename,
            }
            const data = await TestPrep.create(reqInclImg)
            if (data) {
                res.status(200).json({
                    msg: "Data modified!"
                })
            } else {
                res.status(403).json({
                    msg: "Failed to publish the job."
                })
            }
        } else {
            const data = await TestPrep.create(req.body)
            if (data) {
                res.status(200).json({
                    msg: "Data modified!"
                })
            } else {
                res.status(403).json({
                    msg: "Failed to publish the job."
                })
            }
        }
    } catch (err) {
        console.log("Error: " + err)
    }
}

const GetArticles = async (req, res) => {


    try {
        const searchKey = req.params.searchKey;

        let data;

        if ( typeof searchKey !== 'undefined' && searchKey !== '') {
            // No searchKey provided, fetch all data
            data = await TestPrep.findOne({ heading1: searchKey });
        } else {
            // Use findOne when searchKey is provided
            data = await TestPrep.find();
        }

        if (data) {
            res.status(200).json({
                data
            });
        } else {
            res.status(404).json({
                msg: "No data found."
            });
        }
    } catch (err) {
        console.error("Error: " + err);
        res.status(500).json({
            msg: "Internal server error."
        });
    }
}

const UpdateArticle = async (req, res) => {
    try {
        if (req.file) {
            const reqInclImg = {
                ...req.body,
                articleImage: req.file.filename,
            }
            const updated = await TestPrep.findByIdAndUpdate(req.body._id, reqInclImg)
            if (updated) {
                res.status(200).json({
                    msg: "Article modified!"
                })
            } else {
                res.status(401).json({
                    msg: "Failed to modify article."
                })
            }
        }
    } catch (error) {
        console.log(error);
    }
}

const DeleteArticle = async (req, res) => {
  try {
      const _id = req.params.id;
      console.log(req)
      const deleted = await TestPrep.findByIdAndDelete(_id);

      if (!deleted) {
          return res.status(404).json({ message: 'Article not found' });
      }
    res.status(200).json({ message: 'Article deleted successfully' });
  } catch (error) {
      console.error('Error deleting sector:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

exports.PostArticle = PostArticle
exports.GetArticles = GetArticles
exports.UpdateArticle = UpdateArticle
exports.DeleteArticle = DeleteArticle