/* O próprio JS possui seus temporizadores 'setTimeout' e 'setInterval',
 * porém, o 'node-schedule' possui maior flexibilidade/possibilidades.
 */

const schedule = require('node-schedule') // biblioteca que permite o agendamento de tarefas

const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 1', function () {
    console.log('Executando Tarefa 1', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 16
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})