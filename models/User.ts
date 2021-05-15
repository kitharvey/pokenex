import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  favorites: [
    {
      id: Number,
      name: String,
      types: [String],
      sprite: String,
    },
  ],
  score: {
    type: Number,
    default: 0,
  },
})

export default mongoose.models.User || mongoose.model("User", userSchema)
