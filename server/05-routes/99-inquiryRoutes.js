
const Express = require("express");
const router = Express.Router()

const {SubmitInquiry, GetInquiries, DeleteInquiry} = require ("../04-controllers/99-inquiryController.js")

router.post("/submit-inquiry", SubmitInquiry)
router.get("/admin/get-inquiries", GetInquiries)
router.delete("/admin/delete-inquiry/:id", DeleteInquiry)

module.exports = router
