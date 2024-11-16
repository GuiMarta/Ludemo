import { Router } from "express";
import profissionalController from "./app/controllers/profissionalController.js";
import jwt from "jsonwebtoken";
import conexao from "./app/database/conexao.js"; // Importe a conexão do banco de dados
import jogosController from "./app/controllers/jogosController.js";
const router = Router();

//rotabase
router.get("/", (req, res) => {
  res.status(200).send(`
    <html>
      <head>
        <title>Ludemo API</title>
        <style>
          body {
            background-color: black;
            color: white;
            text-align: center;
            font-family: Arial, sans-serif;
          }
          h1 {
            margin-top: 100px;
            font-size: 36px;
          }
          p {
            margin-top: 20px;
            font-size: 18px;
          }
        </style>
      </head>
      <body>
        <h1>Bem-vindo à Ludemo API.</h1>
        <p>Desenvolvido por Guilherme Marta e Larissa Gewher.</p>
      </body>
    </html>
`);
});

//rota sobre
router.get("/sobre", (req, res) => {
  res.status(200).json({
    message: "Rota sobre funcionando",
    version: "1.0.0",
    developers: ["Guilherme Marta", "Larissa Gewher"]
  });
});


// Função para tentar conectar ao banco de dados
function connectToDatabase(callback) {
  let retryCount = 0;
  const maxRetries = 10; // tentar 10 vezes
  const retryInterval = 1000; // 1 segundo

  function attemptReconnect() {
    conexao.ping((err) => {
      if (err) {
        if (retryCount < maxRetries) {
          retryCount++;
          console.log(`Falha ao conectar ao banco de dados. Tentando novamente em ${retryInterval / 1000} segundo...`);
          setTimeout(attemptReconnect, retryInterval);
        } else {
          console.log("Falha ao conectar ao banco de dados após várias tentativas.");
          callback(err);
        }
      } else {
        console.log("Conexão com o banco de dados bem-sucedida");
        callback(null); // Conexão bem-sucedida
      }
    });
  }

  attemptReconnect(); // Inicia a tentativa de conexão
}

// Rota para verificar a conexão com o banco de dados
router.get("/check-db", (req, res) => {
  connectToDatabase((err) => {
    if (err) {
      return res.status(500).json({ message: "Erro ao conectar ao banco de dados", error: err });
    }
    res.status(200).json({ message: "Conexão com o banco de dados bem-sucedida" });
  });
});

// Rota de LOGIN
router.post("/login", (req, res) => {
  console.log("Solicitação de Login Recebida");

  // Verifica a conexão antes de proceder com o login
  connectToDatabase((err) => {
    if (err) {
      return res.status(500).json({ message: "Erro ao conectar ao banco de dados", error: err });
    }
    
    // Chame o controlador de login se a conexão for bem-sucedida
    profissionalController.login(req, res);
  });
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

//////////////////////////////////////////////////////////////////////////////////////


// Recebendo dados da sessão 
router.post("/add/relatory",jogosController.store);



// Rota para listar todas as sessões por cada profissional
router.get("/sessoes/list/:id",jogosController.show);






export default router;