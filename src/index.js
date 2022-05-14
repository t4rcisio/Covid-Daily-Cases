import express from "express";
import route from "./route/route";

const app = express();
const port = 5000;

app.use(route);

app.get("/", (request, response) => {
  response.send("Backend Challenge 2021 🏅 - Covid Daily Cases");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
