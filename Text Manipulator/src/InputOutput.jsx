import React from "react";
import { useState, useCallback, useRef } from "react";

const InputOutput = () => {
  let [cnt, setCnt] = useState(0);
  let [text, setText] = useState('');
  let [bold, setBold] = useState(false);
  let [italic, setItalic] = useState(false);
 
  const handleOnChange = (event) => {
    setText((text = event.target.value));
    // console.log(text);
    // console.log(event.target.value);
  };

  const handleUpperCase = () => {
    setText(text.toUpperCase());
    // console.log(text);
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleClear = () => {
    setText("");
  };

  const handleBold = () => {
    setBold((bold = true));
  };
  const handleItalic = () => {
    setItalic((italic = true));
  };
  const handleCopy = () => {
   
    window.navigator.clipboard.writeText(text);
  }

  

  const countBtnClicked = () => {
    console.log("counter clicked");
    setCnt(cnt + 1);


  };

    let [upc, setUpc] = useState(0);
    const UpcBtnClicked = () => {
      console.log("upc clicked");
    };
    let [lwc, setLwc] = useState(0);
    const LwcBtnClicked = () => {
      console.log("lwc clicked");
    };

  return (
    <>
      <div className="container" style={{ textAlign: "center" }}>
        <textarea
          onChange={handleOnChange}
          style={{
            fontSize: "20px",
            fontWeight: bold ? "bold" : "normal",
            fontStyle: italic ? "italic" : "normal",
          }}
          rows="8"
          cols="100"
          placeholder="Enter your text"
          value={text}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <i className="bi bi-clipboard" onClick={handleCopy}></i>
        <svg
          onClick={handleCopy}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-clipboard"
          viewBox="0 0 16 16"
        >
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
        </svg>
        <button onClick={handleUpperCase} className="btn btn-success my-3 mx-3">
          Uppercase
        </button>
        <button onClick={handleLowerCase} className="btn btn-danger my-3 mx-3 ">
          Lowercase
        </button>
        <button onClick={handleClear} className="btn btn-primary my-3 mx-3">
          Clear
        </button>
        <button onClick={countBtnClicked} className="btn btn-dark my-3 mx-3">
          Count
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={handleBold} className="btn btn-secondary my-3 mx-3">
          Bold
        </button>
        <button onClick={handleItalic} className="btn btn-warning my-3 mx-3 ">
          Italic
        </button>

        <button onClick={handleCopy} className="btn btn-light my-3 mx-3">
          CopyToClipboard
        </button>
        <div className="container">
        <h1>Text Summary</h1>
        <h2>
          {" "}
          Counter:{" "}
          <span style={{ color: cnt > 10 ? "red" : "black" }}> {cnt}</span>{" "}
        </h2>

        <p>No of words are {text.split(' ').length} and no of characters are {text.length} .</p>
        <p>{0.96 * (text.split(' ').length)} seconds </p>
      </div>
      </div>

      
    </>
  );
};

export default InputOutput;
