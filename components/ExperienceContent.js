const ExperienceContent = ({ resumeInfoJSON, selectedColour }) => {
  return (
    <>
      <div className="box" style={{ backgroundColor: selectedColour }}>
        <div className="inner-box">
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <span className="position-title pb-5">
              {resumeInfoJSON.company}
            </span>
            <span className="pb-3">
              {resumeInfoJSON.position}
              <hr className={"line w-100"} />
            </span>
            <div className="pb-3">
              <div className="d-flex flex-row ">
                <span> {resumeInfoJSON.startDate}</span>
                <span className="mx-1">{"-"}</span>
                <span> {resumeInfoJSON.endDate}</span>
              </div>
              <hr className={"line w-100"} />
            </div>
            <span>
              {resumeInfoJSON.country}
              <hr className={"line w-100"} />
            </span>
          </div>
        </div>
        <div className="role-description">
          <p className="pb-2">{"Role description"}</p>
          <div>{resumeInfoJSON.description}</div>
        </div>
      </div>
    </>
  );
};

export default ExperienceContent;
