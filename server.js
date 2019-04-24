const express    = require("express");
const bodyParser = require("body-parser");
const cors       = require("cors"); 
const knex       = require("knex");
const mongoose   = require("mongoose");
const logger     = require("morgan");
const Data       = require('./controllers/data');


var url = process.env.DATABASEURL
mongoose.connect(url,{useNewUrlParser: true});
// mongoose.connect("mongodb+srv://tannerbrooks:WebDevDatabase777@cluster0-pbi57.mongodb.net/test?retryWrites=true",{useNewUrlParser: true});
// mongoose.connect("mongodb+srv://tannerbrooks:WebDevDatabase777@cluster0-mrbj6.mongodb.net/test?retryWrites=true",{useNewUrlParser: true});

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));







const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));



const database = {
            question1: 'Apostolic',
            question2: 'Pastoral',
            question3: 'Teacher',
            question4: 'Pastoral',
            question5: 'Prophetic',
            question6: 'Pastoral',
            question7: 'Evangelic',
            question8: 'Pastoral'
}

app.get('/', (req, res) => { res.send('It is working.') });
// app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt)});
// app.get('/profile/:id' , (req, res) => { profile.handleProfileGet(req, res, db) });
// app.put('/image', (req, res) => { image.handleImage(req, res, db) });
app.get('/database', (req, res) => {
    res.json(database);
});









app.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});






app.post("/putData", (req, res) => {
  let data = new Data();

  const { id, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10,
  question11, question12, question13, question14, question15, question16, question17, question18, question19, question20,
    question21, question22, question23, question24, question25, question26, question27, question28, question29, question30 } = req.body;

  data.question1 = question1;
  data.question2 = question2;
  data.question3 = question3;
  data.question4 = question4;
  data.question5 = question5;
  data.question6 = question6;
  data.question7 = question7;
  data.question8 = question8;
  data.question9 = question9;
  data.question10 = question10;
  data.question11 = question11;
  data.question12 = question12;
  data.question13 = question13;
  data.question14 = question14;
  data.question15 = question15;
  data.question16 = question16;
  data.question17 = question17;
  data.question18 = question18;
  data.question19 = question19;
  data.question20 = question20;
  data.question21 = question21;
  data.question22 = question22;
  data.question23 = question23;
  data.question24 = question24;
  data.question25 = question25;
  data.question26 = question26;
  data.question27 = question27;
  data.question28 = question28;
  data.question29 = question29;
  data.question30 = question30;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    // return res.json({ success: true });
    return res.json({data})
  });
});


// this is our update method
// this method overwrites existing data in our database

app.post("/updateData", (req, res) => {
  const { id, update } = req.body;
  Data.findOneAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});










app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
    console.log(process.env.PORT);
    console.log(process.env.IP);
})