const app = require('./app')
const withDB = require('./src/db.json')
const jsonServer = require('json-server')
const router = jsonServer.router(path.join(__dirname, 'db.json'));


const PORT = process.env.PORT || 5005

withDB(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}`)
    })
})