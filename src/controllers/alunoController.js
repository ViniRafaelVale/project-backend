const { alunos } = require("../models/storage");

const getTodos = (req, res) => {
  res.json(alunos);
};

const getPorId = (req, res) => {
  const aluno = alunos.find(a => a.id == req.params.id);
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


module.exports = { getTodos, getPorId, getMedias, postAluno };