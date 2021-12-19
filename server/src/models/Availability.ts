import { Schema, model } from "mongoose";
import { AvailabilityDays } from "../interface";


const AvailabilitySchema = new Schema<AvailabilityDays>({
  monday: {
    isAvailable: {
      type: Boolean,
      default: false
    },
    time: {
      from: undefined,
      to: undefined
    }
  },
  tuesday: {
    isAvailable: {
      type: Boolean,
      default: false
    },
    time: {
      from: undefined,
      to: undefined
    }
  },
  wednesday: {
    isAvailable: {
      type: Boolean,
      default: false
    },
    time: {
      from: undefined,
      to: undefined
    }
  },
  thursday: {
    isAvailable: {
      type: Boolean,
      default: false
    },
    time: {
      from: undefined,
      to: undefined
    }
  },
  friday: {
    isAvailable: {
      type: Boolean,
      default: false
    },
    time: {
      from: undefined,
      to: undefined
    }
  },
  saturday: {
    isAvailable: {
      type: Boolean,
      default: false
    },
    time: {
      from: undefined,
      to: undefined
    }
  },
  sunday: {
    isAvailable: {
      type: Boolean,
      default: false
    },
    time: {
      from: undefined,
      to: undefined
    }
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "DogSitter"
  }
}, {timestamps: true})

const Availabilty = model("Availabilty", AvailabilitySchema)

export default Availabilty


