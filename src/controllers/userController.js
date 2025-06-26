import  jwt from "jsonwebtoken";
import storage from "../models/storage.js";
import secret from "../config/secret.js";

const usuarios = storage.usuarios;

const register = (req, res) => {
  const { username, password } = req.body;
  if (usuarios.find(u => u.username === username)) {
    return res.status(400).json({ message: "Usuário já existe!" });
  }
  usuarios.push({ username, password });
  res.json({ message: "Usuário registrado com sucesso." });
};

const login = (req, res) => {
  const { username, password } = req.body;
  const user = usuarios.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: "Credenciais inválidas!" });

  const token = jwt.sign({ username }, secret, { expiresIn: "1h" });
  res.json({ token });
};

export default{register,login};