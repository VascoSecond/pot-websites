import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button  } from 'react-bootstrap';

import MenuFooter from './MenuFooter'
import Logo from "../images/platformoftrust-wide-white-rgb.svg"

const activeStyles = {
  borderBottom: '0.2em dotted rgb(240, 240, 240)',
  borderRadius: '0%'
}

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     collapsed: true,
  //     dropdown: false
  //   };
  // }

  // componentWillMount() {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //     dropdown: false
  //   });
  // }

  // componentDidUpdate(prevProps) {
  //   console.log("Updated")
  // }

  // toggleNavbar = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //     dropdown: false
  //   });
  // }
  // toggleDropdown = () => {  this.setState({ dropdown: !this.state.dropdown }); }

  render() {
    // const classMobileMenu = 'navbar-collapse' + (this.state.collapsed ? 'collapse' : '')
    // const classDropdownMenu = `dropdown-menu ${this.state.dropdown ? 'show' : ''}` 
    // const { collapsed, dropdown } = this.state
    return (
      <header className="wrapper">
        <div className="logo">
          <Link className="navbar-brand" to="/">
            <img src={Logo} className="logo__header" alt="Logo" />
          </Link>
        </div>
        <input id="swipe" data-function="swipe" type="checkbox" />
        <label id="menu-toggle" data-function="swipe" htmlFor="swipe" tabIndex="0" role="button" aria-pressed="false">
          <svg focusable="false" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
          <rect className="st0" width="512" height="400"/>
          <path className="st1" d="m304 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm120-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-336 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"/>
          </svg>
        </label>
        <nav className="menus">
            <nav className="apps"> 
              <a className="nav-link" href="http://preview.oftrust.net/">Platform of Trust</a>
              <a className="nav-link" href="http://world.oftrust.net/">MyWorld</a>
              <Link className="nav-link active" to="/">Developer portal</Link>
            </nav>
            <nav className="site"> 
              <Link className="nav-link" to="/" activeStyle={activeStyles}>Portal</Link>
              <Link className="nav-link" to="/use-cases" activeStyle={activeStyles}>Use Cases</Link>
              <Link className="nav-link" to="/apis" activeStyle={activeStyles}>APIs</Link>
              <Link className="nav-link" to="/blogs" activeStyle={activeStyles}>Blogs</Link>
              <Link className="nav-link" to="/guides" activeStyle={activeStyles}>Guides</Link>
            </nav>
            {/* <ul>
                    <li className="nav-item">
                      <Link className="nav-link" to="/use-cases">Use Cases</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/apis">APIs</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/blogs">Blogs</Link>
                    </li> 
                    <li className="nav-item">
                      <Link className="nav-link" to="/guides">Guides</Link>
                    </li> 
                    </ul> */}
            {/* <nav className="tools">
                <div className="hex-wrapper">
                    <div className="reveal">
                        <p>Login</p>
                    </div>
                    <div className="hexagon"><span></span><span></span><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/15581/sign-in-light.svg" alt="Login" /></div>
                </div>
                <div className="hex-wrapper">
                    <div className="reveal-hex">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                                <div className="flip-box-front">
                                    <div className="hexagon"><span></span><span></span></div>
                                </div>
                                <div className="flip-box-back">
                                    <div className="hexagon blue"><span></span><span></span>
                                        <p className="language"> <a href="#">FI </a><span>| </span><a href="#">EN</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hexagon"><span></span><span></span><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/15581/globe-light.svg" alt="Language" /></div>
                </div>
                <div className="hex-wrapper">
                    <div className="reveal">
                        <p>Settings</p>
                    </div>
                    <div className="hexagon"><span></span><span></span><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/15581/cog-light.svg" alt="Login" /></div>
                </div>
                <div className="hex-wrapper">
                    <div className="reveal">
                        <div className="search-wrapper"><input type="text" placeholder="Search site..." /></div>
                    </div>
                    <div className="hexagon"><span></span><span></span><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/15581/search-light.svg" alt="Search" /></div>
                </div>
            </nav>*/}
            {/* <nav className="some"><a href="#">Facebook</a><a href="#">Twitter</a><a href="#">LinkedIn</a><a href="#">GitHub</a></nav> */}
            <div className="menu-footer">
              <MenuFooter />
            </div>
        </nav> 
    </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
