import mongoose, { Schema } from 'mongoose'

export const transaction = mongoose.model(
    'transaction',
    new Schema({
        comment: String,
        amount: Number,
        category: String,
        userEmail: String,
        date: String,
    }),
)
export const users = mongoose.model(
    'users',
    new Schema({
        email: String,
        password: String,
        name: String,
        key: String,
    }),
)

export const family = mongoose.model(
    'family',
    new Schema({
        mainParticipantId: String,
        participants: Array,
    }),
)
