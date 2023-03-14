import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("dark");
  const [mode, setDarkMode] = useState({
    themeMode: "light",
    themeColor: color,
  });

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  //toggle body css
  if (mode.themeColor === "dark" && mode.themeMode === "dark") {
    document.querySelector("body").style.backgroundColor = "rgb(59, 62, 65)";
  } else if (mode.themeColor === "success") {
    document.querySelector("body").style.backgroundColor = "rgb(34, 53, 40)";
  } else if (mode.themeColor === "primary") {
    document.querySelector("body").style.backgroundColor = "rgb(42, 64, 84)";
  }
  const toggelMode = () => {
    if (mode.themeMode === "light") {
      setDarkMode({
        themeMode: "dark",
        themeColor: color,
      });
      document.querySelector(".radioColors").style.display = "none";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setDarkMode({
        themeMode: "light",
        themeColor: "dark",
      });
      document.querySelector(".radioColors").style.display = "";
      document.querySelector("body").style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Text Enhancer"
          mode={mode}
          handleColorChange={handleColorChange}
          toggelMode={toggelMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Text Enhancer - Email Extractor,Word Counter,Character Counter etc."
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route
              exact
              path="/about"
              element={<About  mode={mode} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
