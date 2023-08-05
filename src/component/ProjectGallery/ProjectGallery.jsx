import './projectGallery.scss';
import Card from '../Card/Card';
import Container from 'react-bootstrap/Container';
import { useRef, useEffect, useContext, useState } from 'react';
import { ProjectGalleryContext } from "../../App";

import projects from '../../assets/data/projects.json';

export default function ProjectGallery() {

    const { refGallery, inViewGallery } = useContext(ProjectGalleryContext);
    const cardsContainerRef = useRef(null);

    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        if (inViewGallery === true && isShown === false){
            setIsShown(true);
        }
        const handleMouseMove = (e) => {
            const cards = cardsContainerRef.current.getElementsByClassName("card");
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        };
        const containerRef = cardsContainerRef.current;
        if (inViewGallery && containerRef) {
            containerRef.addEventListener("mousemove", handleMouseMove);
        }
        return () => {
            if (containerRef) {
                containerRef.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, [inViewGallery, isShown]);

    return (
        <article className='project-gallery' id='projects' ref={refGallery}> {/*ref={refGallery} */}
            <Container className={`${isShown ? "show" : ""} hidden`}>
                <h2 className="text-center" >Mes Projets</h2>
                <div className='project-gallery__container'ref={cardsContainerRef}> 
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
