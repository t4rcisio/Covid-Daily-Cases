import Router from "express";
import cases from "./casesRoute.js";

const Routes = Router();

Routes.use("/cases", cases);

export default Routes;
