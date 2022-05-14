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

  return dict;
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

  return dict;
};

export { AggregationCount, AggregationCumulative };
