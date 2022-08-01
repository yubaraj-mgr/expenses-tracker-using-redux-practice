import express, { json } from "express";
import cors from "cors";
import { dbConnect } from "./config/dbConnect.js";
import userRouter from "./users/router/userRouter.js";

// 1. creatig express app

const app = express();
const portNum = 8000;

// 2. make sure the post method is working
app.use(express.json());

// 3. make sure your api is taking care of with the middle man which is cors
app.use(cors());

// 4. Connecting Database
dbConnect();

// 5. Pusing task to router for cleaner code
app.use("/api/v1/", userRouter);

app.listen(portNum, (error) => {
  console.log("Your server is running on http://localhost:" + portNum);
  error && console.log(error);
});
