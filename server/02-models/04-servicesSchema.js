const mongoose = require ("mongoose");

const servicesSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    serviceImages: [
        {
          type: String,
        },
    ],

    articleHeading1: {
        type: String,
    },
    
    articleText1: {
        type: String,
    },

    articleHeading2: {
        type: String,
    },

    articleText2: {
        type: String,
    },

    articleHeading3: {
        type: String,
    },

    articleText3: {
        type: String,
    },

    articleHeading4: {
        type: String,
    },

    articleText4: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

const Services = mongoose.model("Services", servicesSchema);

module.exports = Services