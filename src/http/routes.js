
const routes = (server) => {
    server.get('category', (req, res, next) => {
        res.send(['1', 'vehicles'])
        next()
    })

    server.post('category', (req, res, next) => {
        const { name } = req.params
        res.send(name)
        next()
    })
/*
    server.put('category', (req, res, next) => {
        res.send('working')
        next()
    })

    server.delete('category', (req, res, next) => {
        res.send('working')
        next()
    })*/
}

module.exports = routes