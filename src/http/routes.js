
const routes = (server) => {
    server.get('/', function(req, res, next) {
        res.send('working')
        next()
    })
}

module.exports = routes