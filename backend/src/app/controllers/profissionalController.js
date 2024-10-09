import profissionalRepository from '../repositories/profissionalRepository.js';
import jwt from 'jsonwebtoken';
class profissionalController {
  async index(req, res) {
    try {
      const result = await profissionalRepository.findAll();
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async login(req, res) {

    try {
      const info = req.body;
      // console.log('Login request body:', info); // Adiciona log para verificar o corpo da requisição, checar se está vindo vazia do front
      if (!info.crp || !info.senha) {
        return res.status(400).json({ message: 'CRP e senha são obrigatórios, requisição vazia.' });
      }
      //BUSCANDO USUARIO NO BANCO
      const result = await profissionalRepository.login(info);
      // SE NÃO ENCONTRAR USUÁRIO:
      if (result.length === 0) {
        console.log("Usuário não encontrado proffiController.js");
        return res.status(204).json({ message: 'Usuário não encontrado na base de dados' });
      }
      //USUÁRIO ENCONTRADO:
      console.log("Usuário encontrado");
      const id = result[0].idprofissional;
      const token = jwt.sign({id}, "jwtChave", {expiresIn : '1h'});
      //console.log("Token gerado:", token); //CONSOLE LOG PARA VERIFICAR O TOKEN GERADO NO BACKEND
      return res.json({Login: true, token, result}); //RETORNA O TOKEN, O RESULTADO DA BUSCA E UM BOOLEANO DE SUCESSO
      
    }

    catch (error) {
      console.error('Erro no login:', error); // Adiciona log para capturar detalhes do erro
      res.status(500).json({ message: 'Catch de Erro interno do servidor' });
    }

  }

  async show(req, res) {
    try {
      const id = req.params.id;
      const result = await profissionalRepository.findById(id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async store(req, res) {
    try {
      const info = req.body;
      const result = await profissionalRepository.create(info);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async update(req, res) {
    try {
      const info = req.body;
      const id = req.params.id;
      const result = await profissionalRepository.update(info, id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const result = await profissionalRepository.delete(id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

export default new profissionalController();