import React from "react";

const experienceContent = [
  {
    year: "  MAY 2023 - Present",
    position: " Frontend/Mobile Developer",
    compnayName: "Perpect Timing technologies",
    details: `Web Frontend Development: Lead the design and development of responsive web frontends using ReactJS and Tailwind CSS.Collaborate with cross-functional teams to gather and analyze user requirements, ensuring seamless user experiences. Implement and maintain interactive user interfaces, ensuring optimal performance and cross-browser compatibility. Utilize state management tools like Redux for effective data handling and application scalability.

    Mobile Application Development: Spearhead the Mobile Application Development Team, overseeing Android and iOS app development projects. Architect and develop mobile applications using technologies such as React Native, ensuring consistent user experiences across platforms.`,
  },
  {
    year: "  DEC 2022 - Present",
    position: "Lecturer",
    compnayName: "Bayero University Kano",
    details: "Teaches Software Engineering Courses to Undergraduates" 
  },
  {
    year: "2021 - 2023",
    position: "SOFTWARE ENGINEER",
    compnayName: "Stem Lab, Kano",
    details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`,
  },
  {
    year: "Nov.22 - May 2023",
    position: "BLOACKCHAIN ENGINEER",
    compnayName: "Near Protocol",
    details: `My responsibilities include designing and implementing decentralized applications (dApps) on the Near platform. I create, test, and optimize smart contracts to ensure secure and efficient blockchain interactions. Additionally, I develop frontends using ReactJS and NearJS to facilitate seamless communication with smart contracts, providing a user-friendly interface for our decentralized ecosystem. My role involves close collaboration with cross-functional teams to address technical challenges and drive innovation within the blockchain space`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
