const Express = require("express");
const router = Express.Router()

const {
    AddYouTubeVideoUrl, GetYouTubeVideoUrls, UpdateYouTubeVideoUrl, DeleteYouTubeVideoUrl,
} = require ("../04-controllers/10-videoGalleryController")

router.post("/admin/add-video-url", AddYouTubeVideoUrl)
router.get("/get-video-urls", GetYouTubeVideoUrls)
router.put("/admin/update-video-url", UpdateYouTubeVideoUrl)
router.delete("/admin/delete-video-url/:id", DeleteYouTubeVideoUrl)

module.exports = router