import express from "express";
import { postUserData } from "../model/UserModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  const user = req.body;
  console.log(user);
  const result = await postUserData(user);
  res.send({
    status: "Success",
    message: "User Created Successfully",
    result,
  });
  try {
  } catch (error) {
    error && console.log(error);
  }
});

export default router;
