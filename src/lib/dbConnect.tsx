import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected");
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("db connected successfully");
  } catch (e) {
    console.log("db connection failed !");
    process.exit(1); // exit the process bcuz db is not connected so rest of the application will not work
  }
}
export default dbConnect;
