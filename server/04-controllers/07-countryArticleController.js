const CountryArticle = require("../02-models/07-countryArticleSchema")

const PostCountryArticle = async (req, res) => {
    try {
        if (req.file) {
            const reqInclImg = {
                ...req.body,
                countryImage: req.file.filename,
            }
            const data = await CountryArticle.create(reqInclImg)
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
            const data = await CountryArticle.create(req.body)
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

const GetCountryArticles = async (req, res) => {
    try {
        const data = await CountryArticle.find()
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

const UpdateCountryArticle = async (req, res) => {
    try {
        if (req.file) {
            const reqInclImg = {
                ...req.body,
                countryImage: req.file.filename,
            }
            const updated = await CountryArticle.findByIdAndUpdate(req.body._id, reqInclImg)
            if (updated) {
                res.status(200).json({
                    msg: "Data updated!"
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

const DeleteCountryArticle = async (req, res) => {
  try {
      const _id = req.params.id;
    //   console.log(req)
      const deleted = await CountryArticle.findByIdAndDelete(_id);

      if (!deleted) {
          return res.status(404).json({ message: 'Article not found' });
      }
    res.status(200).json({ message: 'Article deleted successfully' });
  } catch (error) {
      console.error('Error deleting sector:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

exports.PostCountryArticle = PostCountryArticle
exports.GetCountryArticles = GetCountryArticles
exports.UpdateCountryArticle = UpdateCountryArticle
exports.DeleteCountryArticle = DeleteCountryArticle