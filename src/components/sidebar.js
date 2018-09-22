import React, { Component } from 'react';
import { slide as Menu } from "react-burger-menu";

class SideBar extends Component {
	constructor(props) {
    super(props);
		this.state = {
			menuOpen: false
		}
	}

	// This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
	}
	
	// This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

	render() {
		return (
			// Pass on our props
			<Menu 
				{...this.props}
				isOpen={this.state.menuOpen}
				onStateChange={(state) => this.handleStateChange(state)}
			>
				<a className="menu-item" href="#home" onClick={() => this.closeMenu()}>
					Home
				</a>
	
				<a className="menu-item" href="#about" onClick={() => this.closeMenu()}>
					About
				</a>
	
				<a className="menu-item" href="#testimonials" onClick={() => this.closeMenu()}>
					Testimonials
				</a>
	
				<a className="menu-item" href="#contact" onClick={() => this.closeMenu()}>
					Contact
				</a>
			</Menu>
		);
	}
};

export default SideBar
