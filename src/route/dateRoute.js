import Router from "express";
import DateController from "../controller/date.js";

const router = Router();
const client = new DateController();
router.get("/", client.getDate.bind(client));

export default router;
