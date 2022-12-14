import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'macrebs',
      sobrenome: 'tonto',
      email: 'macrebs@tonto.com',
      idade: 17,
      peso: 100,
      altura: 1.78,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
