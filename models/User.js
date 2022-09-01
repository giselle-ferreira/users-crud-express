import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    birthdate: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    }
})

export const User = mongoose.model("User", userSchema)