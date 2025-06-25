const jwt = require("jsonwebtoken");
const { secret } = require("../config/auth");

function autenticar(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: "Token não fornecido." });

  jwt.verify(token, secret, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Token inválido." });
    req.user = decoded;
    next();
  });
}

module.exports = autenticar;