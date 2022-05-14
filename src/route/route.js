import Router from "express";
import cases from "./casesRoute.js";
import date from "./dateRoute.js";

const Routes = Router();

Routes.use("/cases", cases);
Routes.use("/date", date);
export default Routes;
