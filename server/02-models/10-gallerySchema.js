const mongoose = require ("mongoose");

const gallerylSchema = ({

    landmark: {
        type: String,
        default: "github.com/ryan5481"
    },

    galleryImage: {
        type: String,
    },

    imageTitle: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

const Gallery = mongoose.model("Gallery", gallerylSchema);

module.exports = Gallery