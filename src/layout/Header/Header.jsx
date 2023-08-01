import './header.scss';
import logo from '../../assets/images/logo.webp'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

export default function Header() {
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
              <Nav.Link href="/">Accueil</Nav.Link>
              <Nav.Link href="#presentation">Présentation</Nav.Link>
              <Nav.Link href="#projects">Projets</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}