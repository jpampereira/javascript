// padrão utilizado por middlewares como body-parser e cors

function saudacao(nome) {
	return function(req, res, next) {
		console.log(`Seja bem vindo ${nome}.`);
		next();
	}
}

module.exports = saudacao;