const express    = require("express");
const bodyParser = require("body-parser");
const cors       = require("cors"); 
const knex       = require("knex");
const mongoose   = require("mongoose");
const logger     = require("morgan");
const Data       = require('./controllers/data');

mongoose.connect("mongodb+srv://tannerbrooks:WebDevDatabase777@cluster0-pbi57.mongodb.net/test?retryWrites=true",{useNewUrlParser: true});

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

  const { id, question1, question2, question3, question4, question5 } = req.body;

  data.question1 = question1;
  data.question2 = question2;
  data.question3 = question3;
  data.question4 = question4;
  data.question5 = question5;
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