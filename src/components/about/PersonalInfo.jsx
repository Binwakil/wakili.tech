import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Almustapha" },
  { meta: "last name", metaInfo: "Wakili" },
  { meta: "Age", metaInfo: "27 Years" },
  { meta: "Nationality", metaInfo: "Nigeria" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Kano Nigeria" },
  { meta: "phone", metaInfo: "+2348165869402" },
  { meta: "Email", metaInfo: "aawakili.se@buk.edu.ng" },
  { meta: "twitter", metaInfo: " @binwakili" },
  { meta: "langages", metaInfo: "English, Hausa, Arabic" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
