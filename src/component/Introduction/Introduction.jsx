import './introduction.scss';
import {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { IntroductionContext } from "../../App";

export default function Introduction() {

  const { refIntro } = useContext(IntroductionContext);

  return (
    <article className='introduction' id='home' ref={refIntro} >
      <Container className='px-4 d-flex flex-column align-items-center justify-content-around'>
        <h1 className='text-center' >Josemaria Links</h1>
        <div>
          <p className='text-center' id='introduction__bienvenue'>Bienvenue sur mon Portfolio.</p>
          <p className='text-justify'>
            Je suis un d&eacute;veloppeur web passionn&eacute; sp&eacute;cialis&eacute; dans le front-end, avec des comp&eacute;tences en back-end. 
            Actuellement &agrave; la recherche d&apos;un poste en tant que d&eacute;veloppeur front-end junior.
            Explorez mon portfolio pour d&eacute;couvrir mes r&eacute;alisations. 
            <br /> Contactez-moi pour des collaborations ou opportunit&eacute;s professionnelles. 
            Ensemble, cr&eacute;ons des exp&eacute;riences web captivantes !
          </p>
        </div>
        <Button href="#projects" variant="outline-primary" size="lg" className='introduction__button'>
            Voir mes Projets
        </Button>
      </Container>  
    </article>
  )
}