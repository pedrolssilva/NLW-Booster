import express from "express";
import cors from "cors";
import routes from "./routes";
import path from "path";

//Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando do sistema

//Tipos de requisições:
//GET: Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma informação existente no back-end
//DELETE: Remover uma informação do back-end

//POST http://localhost:3333/users = Criar um usuário
//GET http://localhost:3333/users = Listar usuarios
//GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

//Tipos de paramentros:
//Request Param: Parametros que vem na propria rota que identificam um recurso
//Query Param: Parametros que vem na própria rota, geralmente opcionais para filtros, paginação, etc.
//Request Body: Parametros para criação e atualização de informações

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));
app.listen(3333);
