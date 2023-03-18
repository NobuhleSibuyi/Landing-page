import { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import logo from '../logo.jpg';
import linkedin from '../Content/image/linkedin.png';
import instagram from '../Content/image/instagram.png';
import facebook from '../Content/image/facebook.png';

export const Navbar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    } 

    window.addEventListener("scroll", onScroll);

    return () =>window.removeEventListener("scroll", onScroll);
  }, [])

const onUpdateActiveLink = (value) => {
  setActiveLink(value);
}

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <container>
        <Navbar.Brand href="home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'actice navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'actice navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'actice navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/nobuhle-sibuyi/"><img src={linkedin} alt="" /></a>
              <a href="https://instagram.com/bubu_mthunzi?igshid=ZDdkNTZiNTM="><img src={instagram} alt="" /></a>
              <a href="https://m.facebook/nobuhle.cbui"><img src={facebook} alt="" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </container>
    </Navbar>
  )
}