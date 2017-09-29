import express from 'express'
import ejs from 'ejs'
import path from 'path'
const app = new express()


app.use('/static', express.static(path.resolve(__dirname, 'dist')))
app.engine('html', ejs.renderFile)
app.set("view engine", "html")

app.get('/', (req, res, next) => {
    // res.sendFile(path.resolve(__dirname, 'views/index.html'))
    res.render('index', {
        title: 'index',
        msg: 'Hello world!'
    })
})

app.listen(3000)