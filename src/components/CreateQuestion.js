import React, { useState } from "react";
import axios from "axios";

const CreateQuestion = () => {
  const [question, setQuestion] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    answer: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setQuestion((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreate = async () => {
    const createData = await axios.post('https://quiz-app-mern.vercel.app/createQuestions', question).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })

    if(createData){
      alert('Question created');
      setQuestion({
        question: "",
        option1: "",
        option2: "",
        option3: "",
        answer: "",
      })
    }
  };

  return (
    <>
      <div className="container col-md-4 mx-auto mt-5 text-center">
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="question"
            name="question"
            placeholder="Enter Question"
            value={question.question}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="option1"
            name="option1"
            placeholder="Enter Option 1"
            value={question.option1}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="option2"
            name="option2"
            placeholder="Enter Option 2"
            value={question.option2}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="option3"
            name="option3"
            placeholder="Enter Option 3"
            value={question.option3}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="answer"
            name="answer"
            placeholder="Enter answer"
            value={question.answer}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          class="btn btn-success"
          onClick={() => handleCreate()}
        >
          Create
        </button>
      </div>
    </>
  );
};

export default CreateQuestion;
