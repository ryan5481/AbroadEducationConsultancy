const Express = require("express");
const router = Express.Router()

const { 
    AdminLogin,
    AdminSignUp,
    EditAdminUserProfile,
    ChangeAdminUserPassword,
    GetAdminUserProfile
} = require("../../04-controllers/00-admin/00-adminAuthController")

router.post("/auth/admin-login", AdminLogin)
router.post("/auth/admin-signup", AdminSignUp)
router.patch("/auth/edit-profile/:id", EditAdminUserProfile)
router.patch("/auth/change-password/:id", ChangeAdminUserPassword)
router.get("/auth/get-admin-profile/:id", GetAdminUserProfile)

module.exports = router