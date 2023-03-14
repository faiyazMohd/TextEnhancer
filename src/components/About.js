import React from "react";
export default function About(props) { 
  document.title =
    "Text Enhancer - Word counter | character counter | lowercase to uppercase | uppercase to lowercase - About";

  return (
    <>
      <div className="container">
        <h1
          className={`my-3 text-${
            props.mode.themeMode === "light"
              ? "dark"
              : props.mode.themeColor === "dark"
              ? "light"
              : props.mode.themeColor
          }`}
        >
          About Us
        </h1>

        <div className={`accordion `} id="accordionExample">
          <div className={`accordion-item `}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className={`accordion-button bg-${
                  props.mode.themeMode === "light" ? "light" : "dark"
                } text-${
                  props.mode.themeMode === "light"
                    ? "dark"
                    : props.mode.themeColor === "dark"
                    ? "light"
                    : props.mode.themeColor
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyze Your text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className={`accordion-collapse collapse show bg-${
                props.mode.themeMode === "light" ? "light" : "dark"
              } text-${
                props.mode.themeMode === "light"
                  ? "dark"
                  : props.mode.themeColor === "dark"
                  ? "light"
                  : props.mode.themeColor
              }`}
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Text Enhancer gives you a way to analyze your text quickly and
                efficiently. Be it word count, character count or we can also
                extract emails out of text if present.
              </div>
            </div>
          </div>

          {/* item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className={`accordion-button collapsed bg-${
                  props.mode.themeMode === "light" ? "light" : "dark"
                } text-${
                  props.mode.themeMode === "light"
                    ? "dark"
                    : props.mode.themeColor === "dark"
                    ? "light"
                    : props.mode.themeColor
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className={`accordion-collapse collapse bg-${
                props.mode.themeMode === "light" ? "light" : "dark"
              } text-${
                props.mode.themeMode === "light"
                  ? "dark"
                  : props.mode.themeColor === "dark"
                  ? "light"
                  : props.mode.themeColor
              }`}
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Text Enhancer is a free character counter tool that provides
                instant character count & word count statistics for a given
                text. TextUtils reports the number of words and characters. Thus
                it is suitable for writing text with word/ character limit.
              </div>
            </div>
          </div>

          {/* item 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className={`accordion-button collapsed bg-${
                  props.mode.themeMode === "light" ? "light" : "dark"
                } text-${
                  props.mode.themeMode === "light"
                    ? "dark"
                    : props.mode.themeColor === "dark"
                    ? "light"
                    : props.mode.themeColor
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className={`accordion-collapse collapse bg-${
                props.mode.themeMode === "light" ? "light" : "dark"
              } text-${
                props.mode.themeMode === "light"
                  ? "dark"
                  : props.mode.themeColor === "dark"
                  ? "light"
                  : props.mode.themeColor
              }`}
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Text Enhancer software works in any web browsers such as Chrome,
                Firefox, Internet Explorer, Safari, Opera. It suits to count
                characters in facebook, blog, books, excel document, pdf
                document, essays, etc.
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3">
          {/* <button type="button" className="btn btn-primary" onClick={displayMode}>
          {modeText}
        </button> */}
        </div>
      </div>
    </>
  );
}
