import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode haas been enabled", "success");
      document.title = "Textutils - Dark Mode";
      // setInterval(() => {
      //   document.title = "Textutils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutils Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode haas been enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  };

  const greenMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "green";
      showAlert("Green mode haas been enabled", "success");
      document.title = "Textutils - Green Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode haas been enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils" aboutText="About Textutils" /> */}
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          greenMode={greenMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <TextForm
          showAlert={showAlert}
          heading="Enter the text to analize below"
          mode={mode}
        /> */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analize below"
                  mode={mode}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
