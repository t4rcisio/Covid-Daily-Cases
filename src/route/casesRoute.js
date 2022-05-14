import Router from "express";
import CasesController from "../controller/cases.js";

const router = Router();
const client = new CasesController();

router.get("/:date/count", client.getCount.bind(client));
router.get("/:date/cumulative", client.getCumulative(client));

export default router;
