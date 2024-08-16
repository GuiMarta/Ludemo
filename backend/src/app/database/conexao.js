import mysql from "mysql";

const conexao = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "ludemo",
});

conexao.connect();

/**
 *
 * @param {string} sql input do sql pro banco de dados
 * @param {string = id | [info, id]} valores valores a serem passados ao sql
 * @param {string} mensagemReject mensagem de erro
 * @returns objeto da promise com os resultados
 */

  
export const consulta = (sql, valores = "", mensagemReject) => {

  return new Promise((resolve, reject) => {

    conexao.query(sql, valores, (erro, resultado) => {

      if (erro) {
        console.log(valores);
        return reject(mensagemReject);
      }

      const rows = JSON.parse(JSON.stringify(resultado));
      return resolve(rows);
    
    });
  });
  
};

export default conexao;