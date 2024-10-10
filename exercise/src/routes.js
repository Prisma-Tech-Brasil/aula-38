const express = require("express");

const router = express.Router();

// Buscar todas as tarefas.
router.get("/tarefas", (request, response) => {});
// Filtrar tarefas pela descrição.
router.get("/tarefas/:descricao", (request, response) => {});
// Filtrar tarefas por data de criação.
router.get("/tarefas/data/:data", (request, response) => {});
// Criar uma nova tarefa.
router.post("/tarefas", (request, response) => {});
// Editar a descrição de uma tarefa.
router.put("/tarefas/:id", (request, response) => {});
// 	Finalizar uma tarefa (mudar para true).
router.put("/tarefas/:id/finalizar", (request, response) => {});
// Deletar uma tarefa.
router.delete("/tarefas/:id", (request, response) => {});
