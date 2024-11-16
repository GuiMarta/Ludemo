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
    const sql = "SELECT * FROM SessaoRelatorio";
    return consulta(sql, "Não foi possivel listar todos relatórios em jogosRepository");
  }

  findById(id) {
    const sql = "SELECT * FROM SessaoRelatorio WHERE idprofissional=?";
    return consulta(sql, id, "Não foi possivel localizar estes relatórios em jogosRepository");
  }

  delete(id) {
    const sql = "DELETE FROM SessaoRelatorio WHERE id=?";
    return consulta(sql, id, "Não foi possivel apagar o relatório em jogosRepository");
  }
  
}
export default new JogosRepository();
