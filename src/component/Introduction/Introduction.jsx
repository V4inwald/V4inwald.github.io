import './introduction.scss'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";



export default function Introduction() {
  const [ref, inView] = useInView({
    threshold: 0.5
  });
  useEffect(() => {console.log(inView);}, [inView]);
    return (
      <article className='introduction' id='home' ref={ref}>
        <Container className='px-4 d-flex flex-column align-items-center justify-content-around'>
            <h1 className='text-center' >Bonjour je suis Josemaria Links</h1>
            <p className='text-justify introduction__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Officia ratione quos amet similique unde odio alias eaque 
                quidem laboriosam ipsa consequuntur accusantium, architecto 
                saepe officiis ducimus delectus, reiciendis ex magnam rem, 
                doloremque earum soluta? Molestias, consequatur tenetur nemo 
                iure sed ullam incidunt, deserunt saepe perspiciatis laboriosam, 
                exercitationem molestiae deleniti necessitatibus.
            </p>
            <Button href="#" variant="outline-primary" size="lg" className='introduction__button'>
                Voir mes Projets
            </Button>
        </Container>
      </article>
    )
}