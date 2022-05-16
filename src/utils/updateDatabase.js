import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const UpdateDatabase = async (request, response, next) => {
  // Acessa a api em python que verifica se há alteraçãoes para serem feitas no banco de dados
  const res = await fetch(process.env.KAGGLE);
  const data = await res.json();

  // Caso não haja, segue com a requisição
  if (data.Status === "Updated") {
    next();
  } else {
    response.send(
      "Sorry. The server is updating database yet. Don't worry, take less one minute"
    );
  }
};

export default UpdateDatabase;
