import Database from "../service/databse";

class CasesController extends Database {
  constructor() {
    super("variants");
  }

  async getCount(request, response) {
    return response.status(200).send("Count");
  }

  async getCumulative(request, response) {
    return response.status(200).send("Cumulative");
  }
}

export default CasesController;
