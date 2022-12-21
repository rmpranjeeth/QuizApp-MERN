const express = require('express');
const { getQuestions, createQuestions, updateQuestion, deleteQuestion, getQuestion } = require('../controllers/functionsforquiz');
const router = express.Router();

router.route('/getQuestions').get(getQuestions);
router.route('/getQuestion/:id').get(getQuestion);
router.route('/createQuestions').post(createQuestions);
router.route('/updateQuestion/:id').put(updateQuestion);
router.route('/deleteQuestion/:id').delete(deleteQuestion);

module.exports = router;