import jwt from "jsonwebtoken";
import secret from "../config/secret.js";

function autenticar(req, res, next) {
  const authHeader = req.headers.authorization;  
  if (!authHeader) return res.status(401).json({ message: "Token não fornecido." });

  const parts = authHeader.split(' ');

  if (parts.length !== 2 || parts[0] !== 'Bearer')
    return res.status(401).json({ message: "Formato do token inválido." });

  const token = parts[1];
  jwt.verify(token, secret, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Token inválido." });
    req.user = decoded;
    next();
  });
}
export default autenticar;