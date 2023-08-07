import './error.scss';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function Error() {
    return (
      <main className='error d-flex flex-column align-items-center justify-content-center'>
        <Container>
            <div className="error__message d-flex flex-column">
                <h2>404</h2>
                <p>Oups! La page que vous demandez n&apos;existe pas.</p>
            </div>
            <Link to='/' className='btn btn-outline-primary btn-lg error__button' role='button'>
                Retourner sur la page d&apos;accueil
            </Link>
        </Container>
      </main>
    )
}