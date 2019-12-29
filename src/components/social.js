import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://facebook.com/sitplayrescue/">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/sitplayrescue/">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://instagram.com/sitplayrescue/">
        <FaInstagram />
      </a>
    </li>
  </ul>
)

export default SocialLinks
