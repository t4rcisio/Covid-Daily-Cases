import Database from "../service/databse.js";
import { DateRefactor } from "../utils/aggregation.js";

class DateController extends Database {
  constructor() {
    super("variants");
  }

  async getDate(request, response) {
    //                          -> Search params
    //                          -> Agrupa os elementos pela data
    const params = {
      by: ["date"],
      orderBy: {
        date: "asc", //     -> Ordena em ordem crescente
      },
    };

    const count = await super.GroupBy(params);

    if (count.error)
      return response
        .status(500)
        .send({ message: "Failed to connect to database" });

    // O retorno é uma objeto contendo um lista do resulstado da busca
    // {
    //		"date": "2020-05-11T00:00:00.000Z" -> Data
    //	}

    // Converte o objeto em um array
    const list = Object.values({ ...count.data });
    //console.log(list);
    // Converte a data para um formato mais legível
    const formatedList = DateRefactor(list);

    return response.status(200).send(formatedList);
  }
}

export default DateController;
