import express from "express";
import Routes from "./route/route.js";
import dotenv from "dotenv";
import UpdateDatabase from "./utils/updateDatabase.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(Routes);
app.use(UpdateDatabase);

app.get("/", (request, response) => {
  response.send("Backend Challenge 2021 🏅 - Covid Daily Cases");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
