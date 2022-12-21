const mongoose = require('mongoose');

//Model//
const questionSchema = mongoose.Schema({
    question: {type: String},
    option1: {type: String},
    option2: {type: String},
    option3: {type: String},
    answer: {type: String}
})

const questionModel = mongoose.model("question", questionSchema);

module.exports = questionModel;