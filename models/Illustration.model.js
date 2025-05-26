const { model, Schema } = require("mongoose");

const IllustrationSchema = new Schema(
    {
        title: { type: String, required: true },
        description: String,
        price: { type: Number, default: 0 },
        quantity: { type: Number, default: 1 },
        image: String,
    },
    {
        timestamps: true,
    }
);

module.exports = model("Illustration", IllustrationSchema);
