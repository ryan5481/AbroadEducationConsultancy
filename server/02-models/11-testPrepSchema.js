const mongoose = require ("mongoose");
const testPrepSchema = ({

    landmark: {
        type: String,
        default: "github.com/ryan5481"
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

    accordionTitle1: {
        type: String,
    },
    
    accordionText1: {
        type: String,
    },
    
    accordionTitle2: {
        type: String,
    },
    
    accordionText2: {
        type: String,
    },
    
    accordionTitle3: {
        type: String,
    },
    
    accordionText3: {
        type: String,
    },
    
    accordionTitle4: {
        type: String,
    },
    
    accordionText4: {
        type: String,
    },
    
    accordionTitle5: {
        type: String,
    },
    
    accordionText5: {
        type: String,
    },
    
    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

const TestPrep = mongoose.model("TestPrep", testPrepSchema);

module.exports = TestPrep
