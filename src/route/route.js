import Router from "express";
import cases from "./casesRoute.js";

const route = Router();

route.use("/cases", cases);

export default route;
