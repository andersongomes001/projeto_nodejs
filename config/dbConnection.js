var mysql = require('mysql');


var connMysql = function(){
	console.log("conexao com db");
	return mysql.createConnection({
					host:'localhost',
					user:'root',
					password:'w03061991',
					database:'portal_noticias'
				});

}

module.exports = function(){
	return connMysql;
}