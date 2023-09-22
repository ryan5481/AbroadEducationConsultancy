const mongoose = require ("mongoose");
const aboutUsSchema = ({

    landmark: {
        type: String,
        default: "github.com/ryan5481"
    },

    aboutUsImage: {
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

    listheading1: {
        type: String,
    },

    listItems: [
        {
            liHeading: {
                type: String,
            },
            liText: {
                type: String,
            },
        },
    ],

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

const AboutUs = mongoose.model("AboutUs", aboutUsSchema);

module.exports = AboutUs
