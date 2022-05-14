class CasesController {
  async getCount(request, response) {
    response.status(200).send("Count");
  }

  async getCumulative(request, response) {
    response.status(200).send("Cumulative");
  }
}

export default CasesController;
