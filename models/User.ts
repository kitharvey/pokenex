import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
  },
  name: {
    type: String,
  },
  picture: {
    type: String,
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
