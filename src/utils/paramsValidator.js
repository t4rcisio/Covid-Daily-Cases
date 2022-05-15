import { param, validationResult } from "express-validator";

const DateRules = () => {
  // Antes de avaçar na requisição, verifica se o parâmetro
  // date está no formato correto
  return param("date").trim().isISO8601().toDate();
};

const DateValidation = (request, response, next) => {
  const errorRules = validationResult(request);

  //If body params isn't match requirements
  if (!errorRules.isEmpty())
    return response
      .status(422)
      .send({ message: "Date format must be yyyy-mm-dd on url params" });

  //continue
  next();
};

export { DateRules, DateValidation };
