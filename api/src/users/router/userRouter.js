import express from "express";
import { checkUserLoginDetails, postUserData } from "../model/UserModel.js";

const router = express.Router();

router.post("/registration", async (req, res, next) => {
  const user = req.body;
  console.log(user);
  const result = await postUserData(user);
  result
    ? res.send({
        status: "success",
        message: "User Created Successfully",
        result,
      })
    : res.send({
        status: "error",
        message: "Please check your detials",
        result,
      });

  try {
  } catch (error) {
    error && console.log(error);
  }
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  const result = await checkUserLoginDetails({ email: email });
  if (result) {
    if (result.password === password) {
      result.password = undefined;
      res.send({
        status: "success",
        message: "Login Successfully",
        result,
      });
    }
  } else {
    res.send({
      status: "error",
      message: "Please check your Email and Password",
    });
  }

  try {
  } catch (error) {
    error && console.log(error);
  }
});

export default router;
