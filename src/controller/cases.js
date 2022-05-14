class CasesController {
  async getCount(request, response) {
    return response.status(200).send("Count");
  }

  async getCumulative(request, response) {
    return response.status(200).send("Cumulative");
  }
}

export default CasesController;
