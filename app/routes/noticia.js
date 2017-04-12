module.exports = function(aplicacao){
	aplicacao.get('/noticia', function(req, res){
		var conexao = aplicacao.config.dbConnection();
		
		var noticiasModel = aplicacao.app.models.noticias_model;
		
		noticiasModel.getNoticia(conexao, function(erro, resultado){
			res.render('noticias/noticia', {noticia:resultado});
		});
	});
};