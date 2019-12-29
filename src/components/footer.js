import React from 'react'
import SocialLinks from './social'
import { FaChevronCircleUp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer">
      <div className="row">
        <div className="twelve columns">
          <SocialLinks />

          <ul className="copyright">
            <li>&copy; Copyright {currentYear} SitPlayRescue</li>

            <li>
              Developed in React ⚛️ by{' '}
              <a href="https://www.crbaucom.com">Chris Baucom</a>
            </li>
          </ul>
        </div>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <FaChevronCircleUp />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
