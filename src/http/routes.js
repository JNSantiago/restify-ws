const db = require('../services/mysql')

const routes = (server) => {
    server.get('category', (req, res, next) => {
        db.categories().all().then(categories => {
            res.send(categories)
            next()
        }).catch(error => {
            res.send(error)
            next()
        })
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