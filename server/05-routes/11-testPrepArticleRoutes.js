const Express = require("express");
const router = Express.Router()

const {
    PostArticle, GetArticles, UpdateArticle, DeleteArticle
} = require ("../04-controllers/11-testPrepArticleController.js")
const { TestPrepArticleImageUpload } = require ("../03-middlewares/imageUpload.js")

router.post("/admin/post-test-prep-article", TestPrepArticleImageUpload, PostArticle)
router.get("/get-test-prep-articles/:searchKey?", GetArticles)
router.put("/admin/update-test-prep-article", TestPrepArticleImageUpload, UpdateArticle)
router.delete("/admin/delete-test-prep-article/:id", DeleteArticle)


module.exports = router