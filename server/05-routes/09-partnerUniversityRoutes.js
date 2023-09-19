const Express = require("express");
const router = Express.Router()

const {
    AddPartnerUniverisityLogo, GetPartnerUniverisityLogos, UpdatePartnerUniverisityLogo, DeletePartnerUniverisityLogo,
} = require ("../04-controllers/09-partnerUniversityController.js")
const { PartnerUniversityImageUpload } = require ("../03-middlewares/imageUpload.js")

router.post("/admin/add-partner-uni-logo", PartnerUniversityImageUpload, AddPartnerUniverisityLogo)
router.get("/get-partner-uni-logos", GetPartnerUniverisityLogos)
router.put("/admin/update-partner-uni-logo", PartnerUniversityImageUpload, UpdatePartnerUniverisityLogo)
router.delete("/admin/delete-parther-uni-logo/:id", DeletePartnerUniverisityLogo)

module.exports = router