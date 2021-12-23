export default function Sidebar() {
  return (
    <>
      <div className="vh-100">
        <div className={"sidebar"}>
          <div className="header-container">
            <div className={"header-name"}>{"Joel Vargas"}</div>
            <div className={"header-constrast"}></div>
          </div>
          <div className="font-container">
            <div className={"sidebar-font-heading"}>{"ABOUT"}</div>
            <div className={"sidebar-font-heading"}>{"EXPERIENCES"}</div>
            <div className={"sidebar-font-heading"}>{"EDUCATION"}</div>
            <div className={"sidebar-font-heading"}>{"SKILLS"}</div>
          </div>
        </div>
      </div>
    </>
  );
}
