import React from "react";

const educationContent = [
  {
    year: "2021",
    degree: "MASTER OF SCIENCE",
    institute: "MEWAR UNIVERSITY, INDIA",
    details: `MASTER OF SCIENCE IN SOFTWARE ENGINEERING WITH DISTINCTION, 8.92/10.0 CGPA`,
  },
  {
    year: "2019",
    degree: "BACHELOR OF SCIENCE DEGREE",
    institute: "BAYERO UNIVERSITY, NIGERIA",
    details: `BSC COMPUTER SCIENCE WITH FIRST CLASS 4.77/5.00 CGPA`,
  },
  {
    year: "2014",
    degree: "ASSOCIATE OF SCIENCE",
    institute: "INFORMATIC INSTITUTE",
    details: `ASSOCIATE OF COMPUTER SCIENCE WITH DISTINCTION3.65/4.00 CGPA',`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
