var app = require('./config/server');

app.listen(app.get('port'), function(){
	console.log('servidor online na PORTA:'+app.get('port'));
});