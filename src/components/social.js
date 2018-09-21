import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://facebook.com/sitplaylove/">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/sitplaylove/">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://instagram.com/sitplaylove/">
        <FaInstagram />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
