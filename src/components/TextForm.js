import React, { useState } from "react";

export default function TextForm(props) {
  document.title = "Text Enhancer - Word counter | character counter | lowercase to uppercase | uppercase to lowercase - Home ";
  const isEmpty = (value) => {
    return value.length <= 0 ? true : false;
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const convertToUpperCase = () => {
    if (isEmpty(text)) {
      props.showAlert("Please enter some text below to continue", "warning");
      return;
    }
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const capitalize = () => {
    if (isEmpty(text)) {
      props.showAlert("Please enter some text below to continue", "warning");
      return;
    }
    let wordsArr = text.split(" ");
    for (let i = 0; i < wordsArr.length; i++) {
      wordsArr[i] =
        wordsArr[i].charAt(0).toUpperCase() +
        wordsArr[i].slice(1).toLowerCase();
    }
    let newText = wordsArr.join(" ");
    setText(newText);
    props.showAlert("Converted to Capitalize Text", "success");
  };
  const removeExtraSpaces = () => {
    if (isEmpty(text)) {
      props.showAlert("Please enter some text below to continue", "warning");
      return;
    }
    let words = text.split(" ").filter((value) => value !== "");
    words = words.join(" ");
    setText(words);
    props.showAlert("Extra Spaces has been removed", "success");
  };
  const convertToLowerCase = () => {
    if (isEmpty(text)) {
      props.showAlert("Please enter some text below to continue", "warning");
      return;
    }
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const copyText = () => {
    if (isEmpty(text)) {
      props.showAlert("Please enter some text below to continue", "warning");
      return;
    }
    navigator.clipboard.writeText(text);
    props.showAlert("Copied To Clipboard", "success");
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared", "success");
  };
  function getEmails() {
    if (isEmpty(text)) {
      props.showAlert("Please enter some text below to continue", "warning");
      return;
    }
    const myRegex = new RegExp(
      "[a-zA-B1-9-_.-]{1,30}@[a-zA-B-_.-]{1,15}.[a-zA-B-_.-]{1,10}",
      "g"
    );
    // const myRegex = new RegExp("faiyaz", 'g' )
    let totalWords = text.split(" ").filter((value) => value !== "");
    let totalEmails = totalWords.filter((val) => {
      return val.match(myRegex);
    });
    console.log(totalEmails);
    if (totalEmails.length === 0) {
      document.getElementById("results").innerHTML = "No results found";
      props.showAlert("No Emails Found", "warning");
    } else {
      document.getElementById("results").innerHTML = "";
      totalEmails.forEach((elem) => {
        document.getElementById("results").innerHTML += elem + "<br>";
        props.showAlert("Emails Found", "success");
      });
    }
  }
  function getWords() {
    let totalWords = text.split(/\s+/).filter((value) => value !== "").length;
    return totalWords;
  }
  const [text, setText] = useState("");
  //   text = "new Text";//wrong way gives error says assignment to constant variable
  // setText("new Text")//correct way to change the state
  return (
    <>
      <div
        className={`container text-${
          props.mode.themeMode === "lig.themeModeht" ? "dark" : "light"
        }}`}
      >
        {/* <h1 className={`text-${props.mode.themeMode === "light" ? "dark" : "light"}`}> */}
        <h1 className={`mb-3 text-${props.mode.themeMode==="light"?"dark":props.mode.themeColor==="dark"?"light":props.mode.themeColor}`}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className={`form-control text-${props.mode.themeMode==="light"?"dark":props.mode.themeColor==="dark"?"light":props.mode.themeColor}`}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            placeholder={"Enter text here"}
            style={{
              backgroundColor:
                props.mode.themeMode === "dark" ? "rgb(11, 13, 14)" : "white",
              color: props.mode.themeMode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap:"wrap"
          }}
        >
          <button className={`btn btn-${props.mode.themeMode==="light"?"dark":props.mode.themeColor==="dark"?"light":props.mode.themeColor} my-2`} onClick={convertToUpperCase}>
            Uppercase
          </button>
          <button className={`btn btn-${props.mode.themeMode==="light"?"dark":props.mode.themeColor==="dark"?"light":props.mode.themeColor} my-2`} onClick={capitalize}>
            Capitalize
          </button>
          <button className={`btn btn-${props.mode.themeMode==="light"?"dark":props.mode.themeColor==="dark"?"light":props.mode.themeColor} my-2`} onClick={convertToLowerCase}>
            Lowercase
          </button>
          <button className={`btn btn-${props.mode.themeMode==="light"?"dark":props.mode.themeColor==="dark"?"light":props.mode.themeColor} my-2`} onClick={removeExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button className={`btn btn-${props.mode.themeMode==="light"?"dark":props.mode.themeColor==="dark"?"light":props.mode.themeColor} my-2`} onClick={getEmails}>
            Get Emails
          </button>
          <button className={`btn btn-${props.mode.themeMode==="light"?"dark":props.mode.themeColor==="dark"?"light":props.mode.themeColor} my-2`} onClick={copyText}>
            Copy Text
          </button>
          <button className={`btn btn-${props.mode.themeMode==="light"?"dark":props.mode.themeColor==="dark"?"light":props.mode.themeColor} my-2`} onClick={clearText}>
            Clear Text
          </button>
        </div>
      </div>
      <div
        className={`container my-2 text-${props.mode.themeMode==="light"?"dark":props.mode.themeColor==="dark"?"light":props.mode.themeColor}`}
      >
        <h3>Your text summary</h3>
        <h6>
          {getWords()} words and {text.trim().length} characters
        </h6>
        <h6>{0.008 * getWords()} minutes will take to read above text</h6>
        <h3>Results</h3>
        <p id="results"></p>
      </div>
    </>
  );
}
