import mysql from 'mysql2';


const conexao = mysql.createConnection({
  host: 'mysql.infocimol.com.br',
  user: 'infocimol15',
  password: 'zaqwer720',
  database: 'infocimol15',
});

//banco reinher

// const conexao = mysql.createConnection({
//   host: 'mysql.infocimol.com.br',
//   user: 'infocimol13',
//   password: 'Guireinehr021',
//   database: 'infocimol13',
//   connectTimeout: 10000
// });

//banco kort

// const conexao = mysql.createConnection({
//   host: 'mysql.infocimol.com.br',
//   user: 'infocimol07',
//   password: 'qrcam123',
//   database: 'infocimol07',
//   connectTimeout: 10000
// });



conexao.connect((err) => {
  if (err) {
      console.error('Erro ao conectar no banco de dados: ' + err);
      return;
  }
  console.log('Conexão bem-sucedida com o banco de dados');
});


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
        console.log(erro);
        console.log(valores);
        return reject(mensagemReject);
      }

      const rows = JSON.parse(JSON.stringify(resultado));
      return resolve(rows);
    
    });
  });
  
};

export default conexao;