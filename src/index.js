import express from "express";
import Routes from "./route/route.js";

const app = express();
const port = 5000;

app.use(Routes);

app.get("/", (request, response) => {
  response.send("Backend Challenge 2021 🏅 - Covid Daily Cases");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
