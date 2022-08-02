import express from "express";
import { postTransactions } from "../model/transactionsModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await postTransactions(req.body);
    res.send({
      status: "success",
      message: "Transaction Added Successfully",
      result,
    });
  } catch (error) {
    error && console.log(error);
  }
});

export default router;
