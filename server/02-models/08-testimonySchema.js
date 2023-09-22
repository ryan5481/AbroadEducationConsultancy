const mongoose = require ("mongoose");

const testimonySchema = ({

    landmark: {
        type: String,
        default: "github.com/ryan5481"
    },

    testimonyImage: {
        type: String,
    },

    testimonyTitle: {
        type: String,
    },
    
    testimonyText: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

const Testimony = mongoose.model("Testimony", testimonySchema);

module.exports = Testimony