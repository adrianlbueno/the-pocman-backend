
const mongoose = require("mongoose");
const { Schema } = mongoose;
const validatorPackage = require('validator')

const User = new Schema(
    {
        name: {
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

module.exports = mongoose.model("User", User);