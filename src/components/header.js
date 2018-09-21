import React from 'react'

import Navigation from "./navigation";
import Banner from "./banner";
import ScrollDown from "./scrolldown";

const Header = () => (
  <header id="home">
    <Navigation />
    <Banner />
    <ScrollDown />
  </header>
)

export default Header
