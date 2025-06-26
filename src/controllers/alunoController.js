
import storage from "../models/storage.js";;

const alunos = storage.alunos;
const getTodos = (req, res) => {
  res.json(alunos);
};

const getPorId = (req, res) => {
  const aluno = alunos.find(a => a.id === Number(req.params.id));
  if (!aluno) return res.status(404).json({ message: "Aluno não encontrado!" });
  res.json(aluno);
};

const getMedias = (req, res) => {
  const medias = alunos.map(a => ({
    nome: a.nome,
    media: (a.nota1 + a.nota2) / 2
  }));
  res.json(medias);
};


const getAprovados = (req, res) => {
  const status = alunos.map(a => ({
    nome: a.nome,
    status: ((a.nota1 + a.nota2) / 2) >= 6 ? "aprovado" : "reprovado",
  }));
  res.json(status);
};


const postAluno = (req, res) => {
  const { id, nome, ra, nota1, nota2 } = req.body;

  if (!id || !nome || !ra || nota1 == null || nota2 == null) {
    return res.status(400).json({ message: "Dados incompletos!" });
  }

  if (alunos.find(a => a.id === id)) {
    return res.status(400).json({ message: "ID de aluno já existe!" });
  }

  alunos.push({ id, nome, ra, nota1, nota2 });
  res.status(201).json({ message: "Aluno cadastrado com sucesso." });
};

const putAluno = (req, res) => {
  const { nome, ra, nota1, nota2 } = req.body;
  const id = Number(req.params.id);
  if (!nome || !ra || nota1 == null || nota2 == null) {
    return res.status(400).json({ message: "Dados incompletos!" });
  }
  const index = alunos.findIndex(a => a.id === id);
  if (index === -1) {
    return res.status(400).json({ message: "Aluno não cadastrado!" });
  }

  alunos[index] = { id, nome, ra, nota1, nota2 };

  res.status(201).json({ message: "atualizado com sucesso." });
};

const deleteAluno = (req, res) => {
  const id = Number(req.params.id);
  const existsId = alunos.find(a => a.id === id);

  if (!existsId) {
    return res.status(400).json({ "message": "Aluno não encontrado" });
  }
  alunos.splice(existsId, 1);
  res.status(200).json({ "message:": "Aluno removido com sucesso!" });
};

export default { getTodos, getPorId, getMedias, postAluno, putAluno, deleteAluno, getAprovados };