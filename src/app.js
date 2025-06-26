import express from "express";
import userRoutes  from "./routes/userRoutes.js";
import alunoRoutes from "./routes/alunoRoutes.js";
const app = express();

app.use(express.json());
app.use("/", userRoutes);        
app.use("/alunos", alunoRoutes); 

export default app;