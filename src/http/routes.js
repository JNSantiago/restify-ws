const db = require('../services/mysql')

const routes = (server) => {
    server.get('category', async (req, res, next) => {
        try{
            res.send(await db.categories().all())
            next()
        }catch(error) {
            res.send(error)
            next()
        }
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