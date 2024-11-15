import JogosRepository from '../repositories/jogosRepository.js';


class jogosController {
  async index(req, res) {
    try {
      const result = await profissionalRepository.findAll();
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error });
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
      console.log(info);
      const result = await JogosRepository.create(info);
      res.json(result);
    } 
    catch (error) {
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

export default new jogosController();