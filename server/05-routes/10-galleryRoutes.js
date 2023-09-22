const Express = require("express");
const router = Express.Router()

const {
    AddGalleryImage, GetGalleryImages, UpdateGalleryImage, DeleteGalleryImage,
} = require ("../04-controllers/10-galleryController.js")
const { GalleryImageUpload } = require ("../03-middlewares/imageUpload.js")

router.post("/admin/add-gallery-image", GalleryImageUpload, AddGalleryImage)
router.get("/get-gallery-images", GetGalleryImages)
router.put("/admin/update-gallery-image", GalleryImageUpload, UpdateGalleryImage)
router.delete("/admin/delete-gallery-image/:id", DeleteGalleryImage)

module.exports = router