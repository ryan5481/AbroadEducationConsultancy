const Express = require("express");
const router = Express.Router()

const {
    PostCountryArticle, GetCountryArticles, UpdateCountryArticle, DeleteCountryArticle
} = require ("../04-controllers/07-countryArticleController.js")
const { CountryImageUpload } = require ("../03-middlewares/imageUpload.js")

router.post("/admin/post-country-article", CountryImageUpload, PostCountryArticle)
router.get("/get-country-articles/:searchKey?", GetCountryArticles)
router.put("/admin/update-country-article", CountryImageUpload, UpdateCountryArticle)
router.delete("/admin/delete-country-article/:id", DeleteCountryArticle)


module.exports = router