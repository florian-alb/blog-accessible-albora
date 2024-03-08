const express = require('express')
const {join} = require("path");
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'src/pages'));

app.use(express.static('src/public'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/blog', (req, res) => {
    res.render('blog');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})