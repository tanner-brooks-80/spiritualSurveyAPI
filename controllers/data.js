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
    question10: String,
    question11: String,
    question12: String,
    question13: String,
    question14: String,
    question15: String,
    question16: String,
    question17: String,
    question18: String,
    question19: String,
    question20: String
  },
  // { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);

