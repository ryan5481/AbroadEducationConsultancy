const mongoose = require ("mongoose");
const articleSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    articleImage: {
        type: String
    },

    heading1: {
        type: String,
    },

    text1: {
        type: String,
    },
    
    heading2: {
        type: String,
    },

    text2: {
        type: String,
    },
    
    heading3: {
        type: String,
    },

    text3: {
        type: String,
    },

    heading4: {
        type: String,
    },

    text4: {
        type: String,
    },
    heading5: {
        type: String,
    },

    text5: {
        type: String,
    },
    heading6: {
        type: String,
    },

    text6: {
        type: String,
    },
    heading7: {
        type: String,
    },

    text7: {
        type: String,
    },
    heading8: {
        type: String,
    },

    text8: {
        type: String,
    },
    heading8: {
        type: String,
    },

    text8: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

const Article = mongoose.model("Article", articleSchema);

module.exports = Article
