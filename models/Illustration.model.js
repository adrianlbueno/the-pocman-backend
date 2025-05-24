const {model, Schema} = require("mongoose");
const IllustrationSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    quantity: Number,
    image: String
}, {
    timestamps: true,
    collection: 'illustration'
});

module.exports = model('Illustration', IllustrationSchema, 'illustration'); // 'illustration' is the name of the collection in MongoDB
