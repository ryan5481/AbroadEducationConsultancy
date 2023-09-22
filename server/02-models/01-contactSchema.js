const mongoose = require ("mongoose");

const contactSchema = ({

    landmark: {
        type: String,
        default: "github.com/ryan5481"
    },

    tagline1: {
        type: String,
    },

    tagline2: {
        type: String,
    },

    tagline3: {
        type: String,
    },

    email: {
        type: String,
    },

    address: {
        type: String,
    },

    openingHours: {
        type: String,
    },

    phoneNumber: {
        type: Number,
    },
    
    mobileNumber: {
        type: Number,
    },

    whatsappId: {
        type: String,
    },

    facebookId: {
        type: String,
    },

    messangerId: {
        type: String,
    },

    youtubeId: {
        type: String,
    },
    
    instagramId: {
        type: String,
    },
    
    contactUsHeading: {
        type: String,
    },

    contactUsSubheading: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

const Carousel = mongoose.model("Contact", contactSchema);

module.exports = Carousel


