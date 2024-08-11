import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("Already Connected !");
    return;
  }
  if (connectionState === 2) {
    console.log("connecting...");
  }
  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: "Budget_Man",
      bufferCommands: true,
    });
  } catch (e: any) {
    console.log("Error");
  }
};
export default connect;
