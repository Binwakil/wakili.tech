import React from "react";

const skillsContent = [
  { skillClass: "p75", skillPercent: "75", skillName: "ANDROID STUDIO KOTLIN/JAVA" },
  { skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "JAVA" },
  { skillClass: "p66", skillPercent: "66", skillName: "REACTJS" },
  { skillClass: "p65", skillPercent: "65", skillName: "TAILWIND CSS" },
  { skillClass: "p50", skillPercent: "50", skillName: "FIRBASE" },
  { skillClass: "p65", skillPercent: "65", skillName: "BLOCKCHAIN SOLIDTY/RUST" },
  { skillClass: "p45", skillPercent: "45", skillName: "CLOUD" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
