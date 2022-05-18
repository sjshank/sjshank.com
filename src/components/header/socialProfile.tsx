import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import { GiTrail } from "react-icons/gi";

const SocialProfile = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/saurabh-shankariya-a9127349/"
        target="_blank"
        title="LinkedIn"
      >
        <BsLinkedin fontSize={25} />
      </a>
      <a href="https://github.com/sjshank" target="_blank" title="Github">
        <FaGithub fontSize={25} />
      </a>
      <a
        href="https://trailblazer.me/id/sshankariya"
        target="_blank"
        title="Salesforce Trialhead"
      >
        <GiTrail fontSize={25} />
      </a>
      {/* <a
        href="https://twitter.com/sjshankariya"
        target="_blank"
        title="Twitter"
      >
        <FaTwitter fontSize={25} />
      </a>
      <a
        href="https://www.facebook.com/DjSaurabh8/"
        target="_blank"
        title="Facebook"
      >
        <FaFacebook fontSize={25} />
      </a> */}
    </div>
  );
};

export default SocialProfile;
