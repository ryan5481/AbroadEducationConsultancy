const Express = require("express");
const router = Express.Router()

const {
    AddTestimonyImage, GetTestimonyImages, UpdateTestimonyImage
} = require ("../04-controllers/08-testimonyController.js")
const { TestimonyImageUpload } = require ("../03-middlewares/imageUpload.js")

router.post("/admin/add-testimony", TestimonyImageUpload, AddTestimonyImage)
router.get("/get-testimonies", GetTestimonyImages)
router.put("/admin/update-testimony", TestimonyImageUpload, UpdateTestimonyImage)
// router.delete("/admin/delete-carousel-image/:id", DeleteCarouselImage)

module.exports = router