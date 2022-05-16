# Backend Challenge 🏅 2022 - Covid Daily Cases


[Deploy da API](https://daylicasesapi.herokuapp.com) <br/>
[Repositório da API auxiliar](https://kaggleapi.herokuapp.com)

```

Esse repositório faz parte do Challenge Covid Daily Cases.

O módulo consiste em uma API desenvolvida em JavaScript Node, que permite
que o usuário filtre os dados de um banco de dados relativos a reports de
casos de covid no mundo.
```

## Rotas
```
url: /    [GET]
code: 200
Retorno: "Backend Challenge 2021 🏅 - Covid Daily Cases"

```
```
url: /cases/:date/count    [GET]
code: 200
Parâmetro: date -> Data no formato YYYY-MM-DD
Retorno: [{...},{...},...] -> Retorna ao usuário um array contendo os casos de covid naquela data, separado por país e agrupado por variante do vírus
```
```
url: /cases/:date/cumulative    [GET]
code: 200
Parâmetro: date -> Data no formato YYYY-MM-DD
Retorno: [{...},{...},...] -> Retorna ao usuário um array contendo os casos de covid naquela data, separado por país e agrupado por variante do vírus com a soma total de casos por país
```
```
url: /cases/date    [GET]
code: 200
Retorno: [{...},{...},...] -> Retorna ao usuário um array contendo as datas disponíveis para consulta do usuário

```


## Especificações

```
A API desenvolvida faz a busca de dados no MongoDB cloud através da biblioteca Prisma, onde é possivel gerar os esquemas das coleçoes e fazer buscas avançadas
sem a necessidade de se recorre a linguagem SQL. Assim que a busca no banco é feita, uma segunda etapa de agregação é realizada no servidor, onde ultilizando 
a estrutura de dados dicionário, agrega-se os reports de cada variante a um único objeto referenciado pelo nome do país.

Nas requisições /count e /cumulative , o parâmetro "date" é previamente verificado através de um middleware se está em um formato vádilo de data antes proseguir 
com a requisição no servidor

As especificações das rotas foram descritas no padrão OpenAPI 3.0.0, e estão disponíveis no arquivo ./documentation.yaml

Para atestar a funcionalidade das rotas, foi feito um teste por meeio do arquivo ./index.test.js, que constatou o pleno funcionamento da API

```
##  Frameworks e Bibliotecas

```
NodeJs
Express
MongoDB
Express-Validator
Elsint

```


## O ARQUIVO .ENV ESTÁ PREENCHIDO, MAS AS CREDENCIAIS SÃO TEMPORÁRIAS

