import jogosRepository from '../repositories/jogosRepository.js';
import JogosRepository from '../repositories/jogosRepository.js';


class jogosController {

  async show(req, res) {
    try {
      
      const id = req.params.id;
      const result = await jogosRepository.findById(id);
      res.json(result);

    } 
    catch (error) {
      res.status(500).json({ message: error });
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