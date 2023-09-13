const multer = require('multer')

const carouselImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../client/src/uploads/carouselImages/")
    },
    filename: function (req, file, cb) {
        cb(null, "Carousel_Img_" + Date.now() + ".jpeg")
    }
})

const CarouselImageUpload = multer({
    storage: carouselImageStorage,
    // limits: { fileSize: 1024 * 1024 * 4 }, //max file size 4 MB
    // fileFilter: fileFilter
}).single("carouselImage")


exports.CarouselImageUpload = CarouselImageUpload;