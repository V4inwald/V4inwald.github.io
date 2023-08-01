import './projectGallery.scss';
import Card from '../Card/Card';
import Container from 'react-bootstrap/Container';

import projects from '../../assets/data/projects.json';
import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from 'react';


export default function ProjectGallery() {

    const [ref, inView] = useInView({
        threshold: 0.15,
        triggerOnce: true,
    });

    const cardsContainerRef = useRef(null);

    useEffect(() => {
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
        if (inView && containerRef) {
            containerRef.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            if (containerRef) {
                containerRef.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, [inView]);



    return (
        <article className='project-gallery' id='projects' ref={ref}>
            <Container className={`${inView ? "show" : ""} hidden`}>
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
