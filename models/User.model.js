
const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");
const validatorPackage = require('validator')

const UserScheme = new Schema(
    {
        fullname: {
            type: String,
            default: "",
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: [true, "User email required"],
            validate: {
                validator: validatorPackage.isEmail,
                message: "Please provide a valid email",
            },
        },
        password: {
            type: String,
            default: "",
            trim: true,
            select: false,
        },
    },
    {
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }
);
UserScheme.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserScheme);