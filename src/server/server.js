import express from "express";
import Routes from "../route/route.js";
import dotenv from "dotenv";
import UpdateDatabase from "../utils/updateDatabase.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (request, response) => {
  response.status(200).send("Backend Challenge 2021 🏅 - Covid Daily Cases");
});

app.use(UpdateDatabase);
app.use(Routes);

export default app;
