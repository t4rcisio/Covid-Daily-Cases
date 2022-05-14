const AggregationCount = (list, date) => {
  const dict = new Object();

  for (let index = 0; index < list.length; index++) {
    // Monta a lista de variantes para o país e data selecionados
    let variants = new Object();
    if (dict[list[index].location]?.variants)
      variants = dict[list[index].location].variants;

    variants[list[index].variant] = list[index]._sum.num_sequences;

    // Inclui no dicionário o país do índice
    dict[list[index].location] = {
      location: list[index].location,
      date,
      variants: variants,
    };
  }

  return dict;
};

export { AggregationCount };
