const mongoose = require ("mongoose");

const inquirySchema = ({

    landmark: {
        type: String,
        default: "github.com/ryan5481"
    },

    fullName: {
        type: String,
    },

    email: {
        type: String,
    },

    mobileNumber: {
        type: Number,
    },

    currentAddress: {
        type: String,
    },

    questionRegarding: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

const Inquiry = mongoose.model("Inquiry", inquirySchema);

module.exports = Inquiry


