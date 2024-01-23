import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    subscribers: {
        type: Number,
        default: 0,
    },
    subscribersList: {
        type: [String],
    },
},
    { timestamps: true });

export default mongoose.model("User", UserSchema);