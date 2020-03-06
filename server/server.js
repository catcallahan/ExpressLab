let express = require('express');
let path = require('path');
let bodyParser = require('body-parser')
let fs = require('fs');
let app = express();


// app.get('/', (req, res, next) => {
//     res.send("Hello from the web server side")
// })

// app.use((req, res, next) =>{
//     console.log(req.originalUrl);
//     next();
// })

// app.use((req, res, next) => {
//     fs.appendFile('log.txt', `${req.url}\n`);
//     next()
// })


app.use(bodyParser.urlencoded({extended: false}));
app.post('/contact-form', (req, res) => {
    fs.appendFileSync('log.txt', `Name: ${req.body.name}, Email: ${req.body.email}\n`);
    res.send('Thank you!');
})

app.use(express.static(path.join(__dirname, '../public')))


app.listen(3000)