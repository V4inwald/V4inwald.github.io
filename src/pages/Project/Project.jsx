import './project.scss'
import Slideshow from "../../component/Slideshow/Slideshow";
import Error from '../Error/Error';
import { HashLink } from 'react-router-hash-link';
import projects from '../../assets/data/projects.json';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';


export default function Project() {
    const projectId = useParams().id;
    const projectById = projects.filter(data => data.id === projectId);

    //if ID doesn't exist then show error404
    if (projectById.length === 0 ) {
        return(
          <Error />
        );
    }

    const projectTags = projectById[0].tags;
    const linksData = projectById[0].links;
    return (
      <main className="project">
            <Container>
              <h1 className='text-center'>{projectById[0].title}</h1>
              <Slideshow pictures={projectById[0].pictures} alt={projectById[0].title}/>
              <Container>
                <div className='project__links d-flex justify-content-center'>
                  {Object.entries(linksData).map(([key, value], index) => (
                    <a href={value} key={index} target="_blank" rel="noopener noreferrer">
                      {key}
                    </a>
                  ))}
                </div>
                <div className='project__layout'>
                  <div>
                    <h2>Environnement technique</h2>
                    <div className='project__tags'>
                      {projectTags.map((tag, index) => {
                        return (
                          <span className='project__tag' key={index}>{tag}</span>
                          )
                      })}
                    </div>
                  </div>
                  <div>
                    <h2>Contexte</h2>
                    <p>{projectById[0].context}</p>
                    <h2>En détails</h2>
                    <p>{projectById[0].details}</p>
                  </div>
                </div>
                <HashLink to={"/#projects"} className='btn btn-outline-primary btn-lg project__button' role='button'>
                  Voir les autres projets
                </HashLink>
              </Container>
            </Container>
        </main>
    )
}
