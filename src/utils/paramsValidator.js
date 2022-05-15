import { param, validationResult } from "express-validator";

const DateRules = () => {
  // Antes de avaçar na requisição, verifica se o parâmetro
  // date está no formato correto
  return param("date").trim().isISO8601().toDate();
};

const DateValidation = (request, response, next) => {
  const errorRules = validationResult(request);

  //Caso não esteja, para retorna para o cliente
  if (!errorRules.isEmpty())
    return response
      .status(422)
      .send({ message: "Date format must be yyyy-mm-dd on url params" });

  console.log(request.params);
  //continue
  next();
};

export { DateRules, DateValidation };
