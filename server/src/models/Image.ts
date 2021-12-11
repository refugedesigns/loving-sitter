import { Schema, model } from "mongoose";
import { Image } from "src/interface";

const ImageSchema = new Schema<Image>({
  url: {
    type: String,
    required: true
  }
}, {timestamps: true})

const Image = model("Image", ImageSchema)

export default Image