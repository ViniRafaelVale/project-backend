
import express from "express";
import alunoController from "../controllers/alunoController.js";
import autenticar from "../middlewares/auth.js";
const router = express.Router();

router.post("/", autenticar,alunoController.postAluno);
router.get("/", autenticar, alunoController.getTodos);
router.get("/medias", autenticar,alunoController.getMedias);
router.get("/aprovados", autenticar, alunoController.getAprovados);
router.get("/:id", autenticar, alunoController.getPorId);
router.put("/:id", autenticar, alunoController.putAluno);
router.delete("/:id", autenticar, alunoController.deleteAluno);

export default router;