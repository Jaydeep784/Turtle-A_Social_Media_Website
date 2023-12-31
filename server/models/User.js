import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2, 
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        }, 
        email: {
            type: String,
            required: true,
            min: 5,
        },
        password: {
            type: String,
            required: true,
            min: 4,
            max: 10,
        },
        friends: {
            type: Array,
            default: [],
        }, 
        picturePath: {
            type: String,
            default: "",
        },
        location: String, 
        occupation: String, 
        viewedProfile: Number,
        impressions: Number,
    }, {timestamps: true}
)

const User = mongoose.model("User", UserSchema);
export default User;