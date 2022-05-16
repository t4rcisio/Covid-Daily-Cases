import Database from "../service/databse.js";
import {
  AggregationCount,
  AggregationCumulative,
} from "../utils/aggregation.js";

class CasesController extends Database {
  constructor() {
    super("variants");
  }

  async getCount(request, response) {
    const { date } = request.params;
    const nDate = new Date(date.toISOString().split("T") + " GMT-0000");

    //                          -> Search params
    //                          -> Agrupa os elementos pela localização do report e pela variante
    const params = {
      by: ["location", "variant"],
      where: {
        date: nDate, //         -> Filtro de data
      },
      _sum: {
        num_sequences: true, // -> Indica que é para fazer a contagem
      },
      orderBy: {
        location: "asc", //     -> Ordena em ordem alfabética
      },
    };

    const count = await super.GroupBy(params);

    if (count.error)
      return response
        .status(500)
        .send({ message: "Failed to connect to database" });

    // O retorno é uma objeto contendo um lista do resulstado da busca
    // '2613': {                   -> Nº de elementos agrupados
    // _sum: { num_sequences: 0 }, -> Constagem de casos posotivos para a variante
    // location: 'Zimbabwe',       -> Localização do report
    // variant: 'Alpha'            -> Variante do report
    // }

    // Converte o objeto em um array
    const list = Object.values({ ...count.data });

    // Como os dados não estão totalmente agregados, então será preciso
    // fazê-lo. Usando a estrutura de dados "Dicionário", é possível
    // concluir a agregação facilmente.
    const formatedList = AggregationCount(list, nDate);

    return response.status(200).send(formatedList);
  }

  async getCumulative(request, response) {
    const { date } = request.params;
    const nDate = new Date(date.toISOString().split("T") + " GMT-0000");

    //                          -> Search params
    //                          -> Agrupa os elementos pela localização do report e pela variante
    const params = {
      by: ["location", "variant"],
      where: {
        date: nDate, //         -> Filtro de data
      },
      _sum: {
        num_sequences: true, // -> Indica que é para fazer a contagem
      },
      orderBy: {
        location: "asc", //     -> Ordena em ordem alfabética
      },
    };

    const count = await super.GroupBy(params);

    if (count.error)
      return response
        .status(500)
        .send({ message: "Failed to connect to database" });

    // O retorno é uma objeto contendo um lista do resulstado da busca
    // '2613': {                   -> Nº de elementos agrupados
    // _sum: { num_sequences: 0 }, -> Constagem de casos posotivos para a variante
    // location: 'Zimbabwe',       -> Localização do report
    // variant: 'Alpha'            -> Variante do report
    // }

    // Converte o objeto em um array
    const list = Object.values({ ...count.data });

    // Como os dados não estão totalmente agregados, então será preciso
    // fazê-lo. Usando a estrutura de dados "Dicionário", é possível
    // concluir a agregação facilmente.
    const formatedList = AggregationCumulative(list, nDate);

    return response.status(200).send(formatedList);
  }
}

export default CasesController;
