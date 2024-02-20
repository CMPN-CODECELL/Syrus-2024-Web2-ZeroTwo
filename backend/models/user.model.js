import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 18,
    },
    sex: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profileImage: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/business-global-economy_24877-41082.jpg",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    interests: {
      type: [String],
      default: [],
    },
    pastTrips: {
      type: [String],

      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
