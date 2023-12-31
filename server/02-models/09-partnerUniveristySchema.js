const mongoose = require ("mongoose");

const partnerUniveristySchema = ({

    landmark: {
        type: String,
        default: "github.com/ryan5481"
    },

    partnerUniversityLogo: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

const PartnerUniveristy = mongoose.model("PartnerUniveristy", partnerUniveristySchema);

module.exports = PartnerUniveristy