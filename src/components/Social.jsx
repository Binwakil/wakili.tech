import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/binwakeel/",
  },
  { iconName: "fa fa-github", link: "https://github.com/Binwakil" },
  { iconName: "fa fa-facebook", link: "https://www.facebook.com/binwakili" },
  { iconName: "fa fa-twitter", link: "https://twitter.com/binwakili" },
  {
    iconName: "fa fa-youtube",
    link: "https://www.youtube.com/almustaphawakili",
  },
  { iconName: "fa fa-dribbble", link: "https://dribbble.com/wakili" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
