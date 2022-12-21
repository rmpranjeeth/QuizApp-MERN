import React from "react";
import { Link } from "react-router-dom";
import QuizIcon from '@mui/icons-material/Quiz';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link to="/">
          <QuizIcon/>
          <a class="navbar-brand ms-1" href="#">
            QuizApp
          </a>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarNavAltMarkup"
          style={{ justifyContent: "flex-end" }}
        >
          <div class="navbar-nav">
            <Link to="/">
              <a class="nav-link" href="#">
                Questions
              </a>
            </Link>
            <Link to="/createQuestion">
              <a class="nav-link" href="#">
                Create Quiz
              </a>
            </Link>
            <Link to="/editQuestion">
              <a class="nav-link" href="#">
                Edit Quiz
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
