import mongoose, { Schema } from "mongoose";

export const transaction = mongoose.model('transaction', new Schema({ comment: String, price: Number, category: String, user: String, date: Date }));