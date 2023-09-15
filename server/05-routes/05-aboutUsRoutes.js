const Express = require("express");
const router = Express.Router()

const {
    PostAboutUs, GetAboutUs, UpdateAboutUs
} = require ("../04-controllers/05-aboutUsController.js")
const { AboutUsImageUpload } = require ("../03-middlewares/imageUpload.js")

router.post("/admin/post-about-us", AboutUsImageUpload, PostAboutUs)
router.get("/get-about-us", GetAboutUs)
router.put("/admin/update-about-us", AboutUsImageUpload, UpdateAboutUs)

module.exports = router