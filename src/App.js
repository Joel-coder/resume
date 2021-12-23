import logo from "./logo.svg";
import "./App.scss";
import Card from "react-bootstrap/Card";
import "typeface-poppins";
function App() {
  return (
    <>
      <div className={"sidebar"}>
        <div className="header-container">
          <div className={"header-name"}>{"Joel Vargas"}</div>
          <div className={"header-constrast"}></div>
        </div>
        <div className="ms-4">
          <div className={"sidebar-font-heading"}>{"ABOUT"}</div>
          <div className={"sidebar-font-heading"}>{"EXPERIENCES"}</div>
          <div className={"sidebar-font-heading"}>{"EDUCATION"}</div>
          <div className={"sidebar-font-heading"}>{"SKILLS"}</div>
        </div>
      </div>
      <div className="container">
        <div className="me-4"></div>
      </div>
    </>
  );
}

export default App;
