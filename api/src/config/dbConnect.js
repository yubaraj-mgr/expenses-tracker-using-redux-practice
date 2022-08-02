import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    const dbEndPoint =
      "mongodb://localhost:27017/fullstackexpensestrackerredux";
    const conn = mongoose.connect(dbEndPoint);
    conn && console.log("Database Connected");
  } catch (error) {
    error && console.log(error);
  }
};
