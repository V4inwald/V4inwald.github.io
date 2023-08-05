import { useContext, useState, useEffect } from 'react';
import './aboutMe.scss'
import Container from 'react-bootstrap/Container';
import { AboutMeContext } from "../../App";
import Button from 'react-bootstrap/Button';
import html from '../../assets/images/html.svg';
import css from '../../assets/images/css.svg';
import js from '../../assets/images/js.svg';
import react from '../../assets/images/react.svg';
import bootstrap from '../../assets/images/bootstrap.svg';
import sass from '../../assets/images/sass.svg';
import git from '../../assets/images/git.svg';
import figma from '../../assets/images/figma.svg';
import notion from '../../assets/images/notion.svg';
import node from '../../assets/images/node.svg';
import mongoDB from '../../assets/images/mongoDB.svg';

export default function AboutMe() {

    const { refAboutMe, inViewAboutMe } = useContext(AboutMeContext);
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
        if (inViewAboutMe === true && isShown === false){
            setIsShown(true);
        }
    }, [inViewAboutMe, isShown]);

    return (
      <article className='about-me' id="presentation" ref={refAboutMe}>
        <Container className={`${isShown ? "show" : ""} about-me__container hidden`}>
            <aside className='about-me__skills'>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={html} className="about-me__icons" alt="html5" />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={css} className="about-me__icons" alt="css3" />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={js} className="about-me__icons" alt="javascript" />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={react} className="about-me__icons" alt="react" />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={bootstrap} className="about-me__icons" alt="bootstrap" />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={sass} className="about-me__icons" alt="sass" />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={git} className="about-me__icons" alt="git" />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={figma} className="about-me__icons" alt="figma" />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={notion} className="about-me__icons" alt="notion" />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={node} className="about-me__icons" alt="node" />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={mongoDB} className="about-me__icons" alt="mongoDb" />
                </div>
            </aside>
            <Container className='d-flex flex-column align-items-center justify-content-around'>
                <h2 className="text-center" >A propos de moi</h2>
                <p className="text-justify about-me__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Officia ratione quos amet similique unde odio alias eaque 
                    quidem laboriosam ipsa consequuntur accusantium, architecto 
                    saepe officiis ducimus delectus, reiciendis ex magnam rem, 
                    doloremque earum soluta? Molestias, consequatur tenetur nemo 
                    iure sed ullam incidunt, deserunt saepe perspiciatis laboriosam, 
                    exercitationem molestiae deleniti necessitatibus.
                </p>
                <Button href="/files/CV_Josemaria_Links_-_Développeur_Web.pdf" download variant="outline-primary" size="lg" className='about-me__button'>
                    Telecharger mon CV
                </Button>
            </Container>
        </Container>
      </article>
    )
}
