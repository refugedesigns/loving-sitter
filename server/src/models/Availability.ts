import { Schema, model } from "mongoose";
import { AvailabilityDays } from "../interface";

const AvailabilitySchema = new Schema<AvailabilityDays>(
  {
    monday: {
      type: Boolean,
      default: false,
    },
    tuesday: {
      type: Boolean,
      default: false,
    },
    wednesday: {
      type: Boolean,
      default: false,
    },
    thursday: {
      type: Boolean,
      default: false,
    },
    friday: {
      type: Boolean,
      default: false,
    },
    saturday: {
      type: Boolean,
      default: false,
    },
    sunday: {
      type: Boolean,
      default: false,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "DogSitter",
    },
  },
  { timestamps: true }
);

const Availability = model("Availability", AvailabilitySchema);

export default Availability;
