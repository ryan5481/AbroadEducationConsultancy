const multer = require('multer')

//CAROUSEL
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

//LOGO
const logoImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../client/src/uploads/logoImages/")
    },
    filename: function (req, file, cb) {
        cb(null, "Logo_Img_" + Date.now() + ".jpeg")
    }
})

const LogoImageUpload = multer({
    storage: logoImageStorage,
    // limits: { fileSize: 1024 * 1024 * 4 }, //max file size 4 MB
    // fileFilter: fileFilter
}).single("logoImage")

//SERVICES
const servicesImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../client/src/uploads/serviceImages/")
    },
    filename: function (req, file, cb) {
        cb(null, "Service_Img_" + Date.now() + ".jpeg")
    }
})

const ServicesImageUpload = multer({
    storage: servicesImageStorage,
    // limits: { fileSize: 1024 * 1024 * 4 }, //max file size 4 MB
    // fileFilter: fileFilter
}).single("serviceImage")

//ABOUT US
const aboutUsImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../client/src/uploads/aboutUsImages/")
    },
    filename: function (req, file, cb) {
        cb(null, "About_Us_" + Date.now() + ".jpeg")
    }
})

const AboutUsImageUpload = multer({
    storage: aboutUsImageStorage,
    // limits: { fileSize: 1024 * 1024 * 4 }, //max file size 4 MB
    // fileFilter: fileFilter
}).single("aboutUsImage")

//ARTICLES
const articleImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../client/src/uploads/articleImages/")
    },
    filename: function (req, file, cb) {
        cb(null, "Article_Img_" + Date.now() + ".jpeg")
    }
})

const ArticleImageUpload = multer({
    storage: articleImageStorage,
    // limits: { fileSize: 1024 * 1024 * 4 }, //max file size 4 MB
    // fileFilter: fileFilter
}).single("articleImage")

//COUNTRIES
const countryImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../client/src/uploads/countryImages/")
    },
    filename: function (req, file, cb) {
        cb(null, "Country_Img_" + Date.now() + ".jpeg")
    }
})

const CountryImageUpload = multer({
    storage: countryImageStorage,
    // limits: { fileSize: 1024 * 1024 * 4 }, //max file size 4 MB
    // fileFilter: fileFilter
}).single("countryImage")

//TESTIMONY
const testimonyImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../client/src/uploads/testimonyImages/")
    },
    filename: function (req, file, cb) {
        cb(null, "Testimony" + Date.now() + ".jpeg")
    }
})

const TestimonyImageUpload = multer({
    storage: testimonyImageStorage,
    // limits: { fileSize: 1024 * 1024 * 4 }, //max file size 4 MB
    // fileFilter: fileFilter
}).single("testimonyImage")

//PARTNER UNIVERSITY
const partnerUniversityImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../client/src/uploads/partnerUniversityImages/")
    },
    filename: function (req, file, cb) {
        cb(null, "partner_Logo_" + Date.now() + ".jpeg")
    }
})

const PartnerUniversityImageUpload = multer({
    storage: partnerUniversityImageStorage,
    // limits: { fileSize: 1024 * 1024 * 4 }, //max file size 4 MB
    // fileFilter: fileFilter
}).single("partnerUniversityLogo")

exports.CarouselImageUpload = CarouselImageUpload;
exports.LogoImageUpload = LogoImageUpload;
exports.ServicesImageUpload = ServicesImageUpload;
exports.AboutUsImageUpload = AboutUsImageUpload;
exports.ArticleImageUpload = ArticleImageUpload;
exports.CountryImageUpload = CountryImageUpload;
exports.TestimonyImageUpload = TestimonyImageUpload;
exports.PartnerUniversityImageUpload = PartnerUniversityImageUpload;