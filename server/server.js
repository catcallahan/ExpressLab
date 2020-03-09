let express = require('express');
let path = require('path');
let bodyParser = require('body-parser')
let fs = require('fs');
// let router = express.router
let app = express();


// app.get('/', (req, res, next) => {
//     res.send("Hello from the web server side")
// })

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});


// The below is the attempts at the 4th step of the advanced portion of the lab:

// app.use((req, res, next) => {
//     fs.appendFile('log.txt', `${req.url}\n`);
//     next()
// })

// let dataPath = path.join(__dirname, "../formsubmissions.json")

app.post('/contact-form', (req, res) => {
    let response = {
        name: req.body.name,
        email: req.body.email
    }
    fs.appendFileSync('log.json', JSON.stringify(response));
    res.redirect('/');
});

app.get('/formsubmissions', (req, res) => {
    let data = fs.readFileSync('./log.json');
    res.sendFile(data);
});

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);
