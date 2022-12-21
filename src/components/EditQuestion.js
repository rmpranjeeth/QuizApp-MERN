import React, { useEffect, useState } from "react";
import axios from "axios";

const EditQuestion = () => {
  const URL = "https://quiz-app-mern.vercel.app";

  const [datas, setDatas] = useState([]);
  const [counter, setCounter] = useState(0);
  const [selected, setSelected] = useState("");
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

  const handleUpdate = async (id) => {
    const isUpdated = await axios
      .put(`${URL}/updateQuestion/${id}`, question)
      .then((res) => {
        console.log(res);
        setCounter(counter + 1);
      })
      .catch((err) => {
        console.log(err);
      });

    if (isUpdated) {
      alert("Question updated");
    }
  };

  const handleDelete = async (id) => {
    const isDeleted = await axios
      .delete(`${URL}/deleteQuestion/${id}`)
      .then((res) => {
        console.log(res);
        setCounter(counter + 1);
      })
      .catch((err) => {
        console.log(err);
      });

    if (isDeleted) {
      alert("Question Deleted");
    }
  };

  const handleSelected = async (item) => {
    await axios
      .get(`${URL}/getQuestion/${item}`)
      .then((res) => {
        setQuestion({
          question: res.data.question,
          option1: res.data.option1,
          option2: res.data.option2,
          option3: res.data.option3,
          answer: res.data.answer,
        });
        setSelected(item);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${URL}/getQuestions`)
      .then((res) => {
        setDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("got data");
  }, [counter]);

  return (
    <>
      <div className="container d-flex mt-5">
        <div className="col-md-6">
          <ul class="list-group">
            {datas?.map((item) => {
              return (
                <>
                  <li class="list-group-item">
                    {item.question}
                    <a
                      className="btn btn-outline-warning"
                      style={{ marginLeft: "5%" }}
                      onClick={() => {
                        handleSelected(item._id);
                      }}
                    >
                      Edit
                    </a>{" "}
                    <a
                      className="btn btn-outline-danger"
                      style={{ marginLeft: "5%" }}
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                    >
                      Delete
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div className="col-md-6 text-center">
          <div className="container mx-auto">
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
              class="btn btn-primary"
              onClick={() => handleUpdate(selected)}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditQuestion;
