import { consulta } from "../database/conexao.js";

class JogosRepository {
    create(info) {
        const sql = `
            INSERT INTO SessaoRelatorio (idProfissional, apelido, jogo, contadorCliques, inicio, fim, duracao)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        
        const values = [
            info.idProfissional,
            info.apelido,
            info.jogo,
            info.contadorCliques,
            info.inicio,
            info.fim,
            info.duracao
        ];
    
        return consulta(sql, values, "Não foi possível criar um novo relatório em jogosRepository");
    }
    

  findAll() {
    const sql = "SELECT * FROM profissional";
    return consulta(sql, "Não foi possivel listar os usuários  em ProfissionalRepository ");
  }

  findById(id) {
    const sql = "SELECT * FROM profissional WHERE idprofissional=?";
    return consulta(sql, id, "Não foi possivel localizar este usuário em ProfissionalRepository");
  }

  login(info) {
    const sql = "SELECT * FROM profissional WHERE crp=? AND senha=?";
    return consulta(sql, [info.crp, info.senha], "Não foi possivel localizar este usuário em ProfissionalRepository");
  }

  update(info, id) {
    const sql = "UPDATE profissional SET ? WHERE idprofissional=?";
    return consulta(sql, [info, id], "Não foi possivel atualiar o usuário  em ProfissionalRepository ");
  }

  delete(id) {
    const sql = "DELETE FROM profissional WHERE idprofissional=?";
    return consulta(sql, id, "Não foi possivel apagar o usuário  em ProfissionalRepository");
  }
}
export default new JogosRepository();
