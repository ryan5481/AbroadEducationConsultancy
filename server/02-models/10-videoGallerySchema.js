const mongoose = require ("mongoose");

const videoGallerylSchema = ({

    landmark: {
        type: String,
        default: "github.com/ryan5481"
    },

    youTubeVideoUrl: {
        type: String,
    },

    videoTitle: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

const VideoGallery = mongoose.model("VideoGallery", videoGallerylSchema);

module.exports = VideoGallery