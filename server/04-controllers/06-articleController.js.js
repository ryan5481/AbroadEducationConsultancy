const Article = require("../02-models/06-articleSchema.js")

const PostArticle = async (req, res) => {
    try {
        if (req.file) {
            const reqInclImg = {
                ...req.body,
                articleImage: req.file.filename,
            }
            const data = await Article.create(reqInclImg)
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
            const data = await Article.create(req.body)
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
        const data = await Article.find()
        if (data) {
            res.status(200).json({
                data
            })
        } else {
            res.status(401).json({
                msg: "Failed to modify data."
            })
        }
    } catch (err) {
        console.log("Error: " + err)
    }
}

const UpdateArticle = async (req, res) => {
    try {
        if (req.file) {
            const reqInclImg = {
                ...req.body,
                articleImage: req.file.filename,
            }
            const updated = await Article.findByIdAndUpdate(req.body._id, reqInclImg)
            if (updated) {
                res.status(200).json({
                    msg: "Image modified!"
                })
            } else {
                res.status(401).json({
                    msg: "Failed to modify image."
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
      const deleted = await Article.findByIdAndDelete(_id);

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