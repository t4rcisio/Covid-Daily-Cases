import dotenv from "dotenv";

dotenv.config();

const UpdateDatabase = async (request, response, next) => {
  // Acessa a api em python que verifica se há alteraçãoes para serem feitas no banco de dados
  const data = await fetch(process.env.KAGGLE);

  console.log({ ...data });

  // Caso não haja, segue com a requisição
  if (data.status === "Updated") {
    console.log("Done");
    next();
  } else console.log("Updating");
  response.send(
    "Sorry. The server is updating database yet. Don't worry, take less one minute"
  );
};

export default UpdateDatabase;
