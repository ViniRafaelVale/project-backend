const express = require("express");
const router = express.Router();
const { getTodos, getPorId, getMedias } = require("../controllers/alunoController");
const autenticar = require("../middlewares/auth");
const { postAluno } = require("../controllers/alunoController");

router.post("/", autenticar, postAluno);
router.get("/", autenticar, getTodos);
router.get("/medias", autenticar, getMedias);
router.get("/:id", autenticar, getPorId);

module.exports = router;