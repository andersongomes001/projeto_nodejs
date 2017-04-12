module.exports = function(){


	this.getNoticias = function(conexao, funcaoRetorno){
		var sql = 'Select * from noticias';
		conexao.query(sql, funcaoRetorno);
	}

	this.getNoticia = function(conexao, funcaoRetorno){
		var sql = 'Select * from noticias where id_noticia = 1';
		conexao.query(sql, funcaoRetorno);	
	}

	return this;
}