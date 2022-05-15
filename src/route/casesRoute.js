import Router from "express";
import CasesController from "../controller/cases.js";
import { DateRules, DateValidation } from "../utils/paramsValidator.js";

const router = Router();
const client = new CasesController();

router.get(
  "/:date/count",
  DateRules(),
  DateValidation,
  client.getCount.bind(client)
);
router.get(
  "/:date/cumulative",
  DateRules(),
  DateValidation,
  client.getCumulative.bind(client)
);

export default router;
