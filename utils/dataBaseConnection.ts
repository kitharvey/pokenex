import mongoose from "mongoose"

let connection = {}

const dbConnect = async () => {
  if (connection) {
    return
  }

  const db = await mongoose.connect(`${process.env.MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  connection = db.connections[0].readyState
}

export default dbConnect
