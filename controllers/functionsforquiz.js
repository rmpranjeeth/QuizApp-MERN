const { request } = require("express");
const questionModel = require("../models/question")

const getQuestions = async(req, res) => {
    
    try {
            //getting data from db
            const questions = await questionModel.find({});

            if (questions){
                res.json(questions)
            }
        } catch (error) {
            console.log(error);
        }
};

const getQuestion = async(req, res) => {
    
    try {
            //getting data from db
            const questions = await questionModel.findById((req.params.id));

            if (questions){
                res.json(questions)
            }
        } catch (error) {
            console.log(error);
        }
};

const createQuestions = async (req, res) => {
        //creating a new question
    try {
            const question = new questionModel({
                question: req.body.question,
                option1: req.body.option1,
                option2: req.body.option2,
                option3: req.body.option3,
                answer: req.body.answer,
            })
            
            const createData = await question.save();

            if (createData) {
                res.send(createData);
            }

        } catch (error) {
            console.log(error);
        }
};

const updateQuestion = async (req, res) => {
    try{
        //Update a question//
        const question = await questionModel.findByIdAndUpdate(req.params.id, req.body)

        if (question){
            res.send('updated successfully')
        }

    } catch (error) {
        console.log(error);
    }
}

const deleteQuestion = async (req, res) => {
    try{
        //Delete a question//
        const question = await questionModel.findByIdAndDelete(req.params.id);

        if(question){
            res.send('Deleted successfully');
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getQuestions, getQuestion, createQuestions, updateQuestion, deleteQuestion}