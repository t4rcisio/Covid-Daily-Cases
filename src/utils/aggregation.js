const AggregationCount = (list, date) => {
  const dict = new Object();

  for (let index = 0; index < list.length; index++) {
    // Obtem da lista a variente do objeto do índice
    let variants = dict[list[index].location]?.variants || new Object();

    //Adiciona no dicionário de variantes
    variants[list[index].variant] = list[index]._sum.num_sequences;

    // Inclui no dicionário os dados da lista
    dict[list[index].location] = {
      location: list[index].location,
      date,
      variants: variants,
    };
  }

  const response = Object.values({ ...dict });

  return response;
};

const AggregationCumulative = (list, date) => {
  const dict = new Object();

  for (let index = 0; index < list.length; index++) {
    // Monta a lista de variantes para o país e data selecionados

    // Caso existam, obtem os dados do lista referente ao index
    // caso contrário, os cria
    let variants = dict[list[index].location]?.variants || new Object();
    let total = dict[list[index].location]?.total || 0;

    // Adiciona no dicionário de variantes e soma no total
    variants[list[index].variant] = list[index]._sum.num_sequences;
    total = total + list[index]._sum.num_sequences;

    // Inclui no dicionário os dados da lista
    dict[list[index].location] = {
      location: list[index].location,
      date,
      total,
      variants: variants,
    };
  }

  const response = Object.values({ ...dict });

  return response;
};

const DateRefactor = (list) => {
  // Refatora a data para o formato convencional
  list.map((element) => {
    // Converte para o formato de data
    const date = new Date(element.date);
    // Obtem apenas a parte yyyy-mm-dd da data
    [element.date] = date.toISOString().split("T");
  });

  return list;
};

export { AggregationCount, AggregationCumulative, DateRefactor };
