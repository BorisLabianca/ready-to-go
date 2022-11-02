import { useState } from "react";
import "./App.css";

function App() {
  const [boolTop, setBoolTop] = useState(false);
  const [boolMid, setBoolMid] = useState(false);
  const [boolBot, setBoolBot] = useState(false);
  return (
    <div className="App">
      <header>
        <i class="fa-solid fa-shuttle-space"></i>
        <span>Ready To Go</span>
      </header>
      <main>
        <div className="buttons">
          <div className="top-buttons">
            <button
              onClick={() => {
                boolTop === false && setBoolTop(!boolTop);
              }}
              className={boolTop === false ? "notPushed" : "pushed"}
            >
              ON
            </button>
            <button
              onClick={() => {
                boolTop === true && setBoolTop(!boolTop);
              }}
              className={boolTop === false ? "pushed" : "notPushed"}
            >
              OFF
            </button>
          </div>
          <div className="middle-buttons">
            <button
              onClick={() => {
                boolMid === false && setBoolMid(!boolMid);
              }}
              className={boolMid === false ? "notPushed" : "pushed"}
            >
              ON
            </button>
            <button
              onClick={() => {
                boolMid === true && setBoolMid(!boolMid);
              }}
              className={boolMid === false ? "pushed" : "notPushed"}
            >
              OFF
            </button>
          </div>
          <div className="bottom-buttons">
            <button
              onClick={() => {
                boolBot === false && setBoolBot(!boolBot);
              }}
              className={boolBot === false ? "notPushed" : "pushed"}
            >
              ON
            </button>
            <button
              onClick={() => {
                boolBot === true && setBoolBot(!boolBot);
              }}
              className={boolBot === false ? "pushed" : "notPushed"}
            >
              OFF
            </button>
          </div>
        </div>
        <div className="disp-message">
          <div
            className={
              boolBot === true && boolMid === true && boolTop === true
                ? "go"
                : "no-way"
            }
          >
            {boolBot === true && boolMid === true && boolTop === true
              ? "Go!"
              : "No way!"}
          </div>
        </div>
      </main>
      <footer>
        <p>
          Made with{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            React
          </a>{" "}
          at{" "}
          <a href="https://www.lereacteur.io/" target="_blank" rel="noreferrer">
            Le Reacteur
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/boris-labianca-01a52871/"
            target="_blank"
            rel="noreferrer"
          >
            Boris
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
