const mongoose = require ("mongoose");

const adminUserSchema = ({

    landmark: {
        type: String,
        default: "github.com/ryan5481"
    },
    
    fullName: {
        type: String,
    },

    profilePicture: {
        type: String,
    },
    
    email: {
        type: String,
    },

    password: {
        type: String,
        required: true,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

const AdminUser = mongoose.model("AdminUser", adminUserSchema);

module.exports = AdminUser


