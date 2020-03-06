let express = require('express');
let path = require('path');
// let bodyParser = require('body-parser')
let fs = require('fs');
// let router = express.router
let app = express();


// app.get('/', (req, res, next) => {
//     res.send("Hello from the web server side")
// })

app.use((req, res, next) =>{
    console.log(req.originalUrl);
    next();
})


// The below is the attempts at the 4th step of the advanced portion of the lab:

    // app.use((req, res, next) => {
    //     fs.appendFile('log.txt', `${req.url}\n`);
    //     next()
    // })

// let dataPath = path.join(__dirname, "../formsubmissions.json")

// app.use(bodyParser.urlencoded({extended: false}));
// app.post('/contact-form', (req, res) => {
//     fs.appendFileSync('log.txt', `Name: ${req.body.name}, Email: ${req.body.email}\n`);
//     res.send('/formsubmission');
// })
// // app.get form submit???

// router.get('/formsubmission', (req, res)=>{

// })

app.use(express.static(path.join(__dirname, '../public')))


app.listen(3000)