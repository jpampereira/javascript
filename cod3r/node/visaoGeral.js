/* - O Node permite o uso do JavaScript no Back-End. 
 *
 * - Ele é a junção do V8 (o mais poderoso interpretador/motor do JavaScript utilizado
 * no Google Chrome) e a biblioteca Libuv.
 * 
 * - A Libuv é uma biblioteca escrita em C responsável por realizar as operações de I/O 
 * (leitura de arquivo, conexão com o banco de dados, requisições HTTP, etc) do JS. Todas 
 * as requisições são colocadas em uma fila e são processadas uma a uma por uma única thread 
 * chamada de 'Event Loop' (por padrão, uma única thread, mas sendo possível configurar mais) 
 * responsável por despachar essas requisições para threads trabalhadoras que iram tratar de 
 * fato essas requisições. Após obter o resultado dessas requisições, uma callback é acionada
 * e a resposta da requisição é retornada para o solicitante.
 * 
 * - O JS já foi pensado para realizar operações I/O de forma assíncrona.
 */