
const mongoose = require("mongoose");
const { Schema } = mongoose;

const IllustrationSchema = new Schema(
    {
        title: {
            type: String,
            default: "",
            trim: true,
            required: [true, "title required"],
        },
        description: {
            type: String,
            default: "",
            trim: true,
            required: [true, "description required"],
        },
        price: {
            type: Number,
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

module.exports = mongoose.model("Illustration", IllustrationSchema);