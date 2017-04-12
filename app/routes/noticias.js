module.exports = function(aplicacao){
	aplicacao.get('/noticias', function(req, res){
		var conexao = aplicacao.config.dbConnection();
		

		var noticiasModel = aplicacao.app.models.noticias_model;

		noticiasModel.getNoticias(conexao, function(erro, resultado){
			res.render('noticias/noticias', {noticias:resultado});
		});
		

		
	});
};