import React, { useEffect, useState } from "react";
import axios from "axios";

const Cards = () => {
  const [index, setIndex] = useState(0);
  const [datas, setDatas] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const URL = "http://localhost:5001";

  const handleSelected = (item) => {
    console.log(item);
    setSelectedItem(item);
  };

  const handleCompare = (answer) => {
    if (answer === selectedItem) {
      alert("correct answer");
      setIndex(index + 1);
    } else {
      alert("wrong answer");
    }
  };

  useEffect(() => {
    axios
      .get(`${URL}/getQuestions`)
      .then((res) => {
        setDatas(res.data);
        console.log(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("got data");
  }, [index]);

  return (
    <>
      <div className="col-md-4 mx-auto" style={{ marginTop: "8%" }}>
        <div className="card">
          <div className="card-body CardQuiz">
            {datas[index] ? (
              <>
                <h5 className="card-title">{datas[index]?.question}</h5>
                <p className="card-text mt-3">
                  <div
                    class="form-check"
                    onClick={() => handleSelected(datas[index]?.option1)}
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value={datas[index]?.option1}
                    />
                    <label className="form-check-label" for="exampleRadios1">
                      {datas[index]?.option1}
                    </label>
                  </div>
                </p>
                <p className="card-text">
                  <div
                    class="form-check"
                    onClick={() => handleSelected(datas[index]?.option2)}
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value={datas[index]?.option2}
                    />
                    <label className="form-check-label" for="exampleRadios1">
                      {datas[index]?.option2}
                    </label>
                  </div>
                </p>
                <p className="card-text">
                  <div
                    class="form-check"
                    onClick={() => handleSelected(datas[index]?.option3)}
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value={datas[index]?.option3}
                    />
                    <label className="form-check-label" for="exampleRadios1">
                      {datas[index]?.option3}
                    </label>
                  </div>
                </p>
                <div className="col-6 mx-auto text-center">
                  <a
                    href="#"
                    className="btn btn-primary"
                    
                    onClick={() => {
                      handleCompare(datas[index]?.answer);
                    }}
                  >
                    Next Question
                  </a>
                </div>
              </>
            ) : (
              <>
                <div className="text-center">
                  <p className="text-success">Congrats!!! Quiz Finished</p>
                  <a
                    className="btn btn-info"
                    onClick={() => {
                      setIndex(0);
                    }}
                  >
                    Try Again
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
