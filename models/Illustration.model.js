const mongoose = require("mongoose");

const IllustrationSchema = new mongoose.Schema(
    {
        id: { type: Number, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, default: 1 },
        image: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Illustration", IllustrationSchema, "illustrations");
