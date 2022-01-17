import { Schema, model } from "mongoose";
import { Review, ReviewModel, ReviewDocument } from "../interface"

const ReviewSchema: Schema = new Schema<Review> ({
    sender: {
        type: Schema.Types.ObjectId,
        ref: "BaseUser"
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: "DogSitter"
    },
    message: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
}, {timestamps: true})

const Review = model<ReviewDocument, ReviewModel>("Review", ReviewSchema)

export default Review