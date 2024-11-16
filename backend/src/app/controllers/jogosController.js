import jogosRepository from '../repositories/jogosRepository.js';
import JogosRepository from '../repositories/jogosRepository.js';


class jogosController {

  async show(req, res) {
    try {
      const idProfissional = req.params.id;

      if (!idProfissional) {
        return res.status(400).json({ message: "ID do profissional não fornecido." });
      }

      const result = await jogosRepository.findById(idProfissional);

      if (result.length === 0) {
        return res.status(200).json({ message: "Nenhum relatório encontrado para este profissional." });
      }

      res.status(200).json(result);
    } catch (error) {
      console.error("Erro ao buscar relatórios:", error.message);
      res.status(500).json({ message: "Erro interno ao buscar relatórios." });
    }
  }


  async store(req, res) {
    
    try {
      const info = req.body;
      console.log(info);
      const result = await JogosRepository.create(info);
      res.json(result);
    } 
    catch (error) {
      res.status(500).json({ message: error });
    }
  }

}

export default new jogosController();