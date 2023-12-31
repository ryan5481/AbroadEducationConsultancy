const mongoose = require ("mongoose");

const carouselSchema = ({

    landmark: {
        type: String,
        default: "github.com/ryan5481"
    },

    carouselImage: {
        type: String,
    },

    imageTitle: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

const Carousel = mongoose.model("Carousel", carouselSchema);

module.exports = Carousel