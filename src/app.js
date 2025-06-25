const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const userRoutes = require("./routes/userRoutes");
const alunoRoutes = require("./routes/alunoRoutes");

app.use(bodyParser.json());

app.use("/", userRoutes);         // POST /register, POST /login
app.use("/alunos", alunoRoutes); // GET /alunos, /alunos/:id, /alunos/medias/todos

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));