const express = require ('express');
const cors = require('cors'); 
const routes = require ('./routes');


const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/**
 * Rota / Recursos
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end (usuario,nome,senha)
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */


  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, pagina (nome,pagina))
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizando para criar ou alterar recursos
   */

   /** Tipos de bancos de dados
    * 
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQl Server
    * NoSQl: MongoDB, CouchDB, etc
    */

    /** Maneiras de usar/baixar os banco de dados
     * 
     * Driver: SELECT * FROM users 
     * Query Builder: table('users').select('*').where() / Utilizando codigo JS
     */


