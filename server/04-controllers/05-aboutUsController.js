const AboutUs = require("../02-models/05-aboutUsSchema.js")

const PostAboutUs = async (req, res) => {
    try {
        if (req.file) {
            const reqInclImg = {
                ...req.body,
                aboutUsImage: req.file.filename,
            }
            const data = await AboutUs.create(reqInclImg)
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
            const data = await AboutUs.create(req.body)
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

const GetAboutUs = async (req, res) => {
    try {
        const data = await AboutUs.findById("650af7e0108db04d57959671")
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

const UpdateAboutUs = async (req, res) => {
    try {
        if (req.file) {
            const reqInclImg = {
                ...req.body,
                aboutUsImage: req.file.filename,
            }
            const updated = await AboutUs.findByIdAndUpdate("650af7e0108db04d57959671", reqInclImg)
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

exports.PostAboutUs = PostAboutUs
exports.GetAboutUs = GetAboutUs
exports.UpdateAboutUs = UpdateAboutUs