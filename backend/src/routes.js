import { Router } from "express";
import profissionalController from "./app/controllers/profissionalController.js";
import jwt from "jsonwebtoken";
const router = Router();

//rotabase
router.get("/", (req, res) => {
  res.send("Servidor de rotas Ludemo Online.");
});
//para listar todas os profissionais
router.get("/profissionais/list", profissionalController.index);

//para listar um profissional pelo id
router.get("/profissional/list/:id", profissionalController.show);

//para deletar um profissional pelo id
router.delete("/profissional/delete/:id", profissionalController.delete);

//para atualizar um profissional pelo id
router.put("/profissional/update/:id", profissionalController.update);

//para criar um novo cadastro, enviando as info no corpo da requisição
router.post("/cadastro", profissionalController.store);

//rota de LOGIN
router.post("/login", (req, res) => {
  console.log("Solicitação de Login Recebida");
  profissionalController.login(req, res);
});

//funcao para verificar o token
const verifyToken = (req, res, next) => {
 
  const token = req.headers["authorization"];
  //Caso precise ver o token que veio:
  //console.log("O token que chegou foi ", token); 
  if (!token) return res.status(401).json({ valid: false, message: "Acesso negado" });
  else {
    jwt.verify(token, "jwtChave", (err, decoded) => {
      if (err) return res.status(403).json({ valid: false, message: "Token não é valido" });
      req.userId = decoded.id;
      next();
    });
  }
};

//rota de verificação de token
router.get("/verifyToken", verifyToken, (req, res) => {
  res.json({ valid: true, userId: req.userId, message: "Token Válido" });
});




export default router;
