const Express = require("express");
const router = Express.Router()

const {
    PostArticle, GetArticles, UpdateArticle, DeleteArticle
} = require ("../04-controllers/06-articleController.js")
const { ArticleImageUpload } = require ("../03-middlewares/imageUpload.js")

router.post("/admin/post-article", ArticleImageUpload, PostArticle)
router.get("/get-articles", GetArticles)
router.put("/admin/update-article", ArticleImageUpload, UpdateArticle)
router.delete("/admin/delete-article/:id", DeleteArticle)


module.exports = router