// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    question1: String,
    question2: String,
    question3: String,
    question4: String,
    question5: String,
    question6: String,
    question7: String,
    question8: String,
    question9: String,
    question10: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);

