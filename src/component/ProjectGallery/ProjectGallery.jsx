import './projectGallery.scss';
import Card from '../Card/Card';
import Container from 'react-bootstrap/Container';

import projects from '../../assets/data/projects.json';


export default function ProjectGallery() {

    return (
        <article className='project-gallery' id='projects'>
            <Container>
                <h2 className="text-center" >Mes Projets</h2>
                <div className='project-gallery__container'>
                    {projects.map((project) => {
                        return (
                            <Card
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                tags={project.tags}
                                description={project.description}
                            />
                        )
                    })}
                </div>
            </Container>
        </article>
    )
}
