import './header.scss';
import { useContext } from 'react';
import logo from '../../assets/images/logo.webp'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { HashLink } from 'react-router-hash-link';
import {  useLocation } from 'react-router-dom'
import { IntroductionContext } from '../../App';
import { AboutMeContext } from '../../App';
import { ProjectGalleryContext } from "../../App";
import { ContactContext } from "../../App";

export default function Header() {
  
  let path = useLocation().pathname;

  const { inViewIntro } = useContext(IntroductionContext);
  const { inViewAboutMe } = useContext(AboutMeContext);
  const { inViewGallery } = useContext(ProjectGalleryContext);
  const { inViewContact } = useContext(ContactContext);

  const isIntroActive = inViewIntro && path == '/';
  const isAboutMeActive = inViewAboutMe && path == '/';
  const isProjectsActive = inViewGallery && path == '/';

  return (
    <header>
      <Navbar expand="md" className="navbar navbar-dark">
        <Container>
          <Navbar.Brand href="/">
            <Image 
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top logo"
              alt="Josemaria Links"
              roundedCircle />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <HashLink className={`${isIntroActive ? "active" : ""} nav-link`} to={"/#top"}>Accueil</HashLink>
              <HashLink className={`${isAboutMeActive ? "active" : ""} nav-link`} to={"/#presentation"}>Présentation</HashLink>
              <HashLink className={`${isProjectsActive ? "active" : ""} nav-link`} to={"/#projects"}>Projets</HashLink>
              <HashLink className={`${inViewContact ? "active" : ""} nav-link`} to={"#contact"}>Contact</HashLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}