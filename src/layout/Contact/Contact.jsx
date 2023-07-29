import './contact.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Contact() {
    return (
      <footer className='footer' id='contact'>
        <Container className='container-md d-flex flex-column'>
            <h2 className='d-flex justify-content-center' id='contact'>Contactez moi</h2>
            <Row>
                <div className="col d-flex flex-column justify-content-center">
                    <div className='footer__email' onClick={() => {window.location.href ='mailto:josemaria.links2@gmail.com';}}> josemaria.links2@gmail.com </div>
                    <span>06.04.16.86.08</span>
                    <span>Tours - France</span>
                </div>
                <div className="col d-flex justify-content-end align-items-center footer__icons">
                    <a href='https://www.linkedin.com/in/josemaria-links-94636413b' alt='Linkedin' target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href='https://github.com/V4inwald' alt='Github' target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github"></i>
                    </a>
                </div>
            </Row>


        </Container>
      </footer>
    )
  }