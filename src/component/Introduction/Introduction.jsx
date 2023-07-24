import './introduction.scss'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';



export default function Introduction() {
    return (
      <article className='introduction'>
        <Container className='px-4 d-flex flex-column align-items-center'>
            <h1 className="text-center" >Bonjour je suis Josemaria Links</h1>
            <p className="text-justify introduction__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
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
