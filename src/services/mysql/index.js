const mysqlServer = require('mysql')

const connection = mysqlServer.createConnection({
    host: 'localhost',
    user: 'joaoneto',
    password: 123456,
    database: 'restify'
})

connection.query('', (error, results) => {

})
