import mongoose from "mongoose";

const transSactionsSchema = new mongoose.Schema({
  transSactionName: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
});

export default mongoose.model("transactions", transSactionsSchema);
