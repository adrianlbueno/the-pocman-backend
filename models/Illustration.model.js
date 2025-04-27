
const mongoose = require("mongoose");
const { Schema } = mongoose;

const Illustrator = new Schema(
    {
        title: {
            type: String,
            default: "",
            trim: true,
            required: [true, "title required"],
        },
        description: {
            type: Number,
            default: "",
            trim: true,
            required: [true, "description required"],

        },
        price: {
            type: String,
            default: "",
            trim: true,
        },
        imageUrl: {
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

module.exports = mongoose.model("Illustrator", Illustrator);