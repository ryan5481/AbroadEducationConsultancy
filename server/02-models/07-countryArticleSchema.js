const mongoose = require ("mongoose");
const countryArticleSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    countryImage: {
        type: String
    },

    heading1: {
        type: String,
    },

    text1: {
        type: String,
    },

    points1: {
        type: String,
    },
    
    heading2: {
        type: String,
    },

    text2: {
        type: String,
    },
    
    points2: {
        type: String,
    },
    
    heading3: {
        type: String,
    },

    text3: {
        type: String,
    },

    points3: {
        type: String,
    },
    
    heading4: {
        type: String,
    },

    text4: {
        type: String,
    },

    points4: {
        type: String,
    },
    
    heading5: {
        type: String,
    },

    text5: {
        type: String,
    },

    points5: {
        type: String,
    },
    
    heading6: {
        type: String,
    },

    text6: {
        type: String,
    },

    points6: {
        type: String,
    },
    
    heading7: {
        type: String,
    },
 
    text7: {
        type: String,
    },

    points7: {
        type: String,
    },
 
    heading8: {
        type: String,
    },

    text8: {
        type: String,
    },
      
    points8: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

const CountryArticle = mongoose.model("CountryArticle", countryArticleSchema);

module.exports = CountryArticle
