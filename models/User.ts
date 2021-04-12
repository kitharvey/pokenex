import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
  },
  displayName: {
    type: String,
  },
  favorites: [
    {
      id: Number,
      name: String,
      types: [String],
    },
  ],
  score: {
    type: Number,
    default: 0,
  },
})

export default mongoose.models.User || mongoose.model("User", userSchema)
