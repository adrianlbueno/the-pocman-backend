
const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = new Schema(
    {
        name: {
            type: String,
            default: "",
            trim: true,
        },
        email: {
            type: String,
            default: "",
            trim: true,
            validate: {
                validator: async function (email) {
                    const user = await this.constructor.findOne({ email });
                    if (user) {
                        if (this.id === user.id) {
                            return true;
                        }
                        return false;
                    }
                    return true;
                },
                message: (props) => "This email is already in use",
            },
            required: [true, "User email required"],
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