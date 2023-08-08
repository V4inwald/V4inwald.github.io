import "./sass/main.scss";
import React from 'react';
import Header from './layout/Header/Header';
import Contact from './layout/Contact/Contact';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import Error from "./pages/Error/Error";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useInView } from 'react-intersection-observer';

export const IntroductionContext = React.createContext();
export const AboutMeContext = React.createContext();
export const ProjectGalleryContext = React.createContext();
export const ContactContext = React.createContext();

const App = () => {

    const [refIntro, inViewIntro] = useInView({
        threshold: 0.4
      });

    const [refAboutMe, inViewAboutMe] = useInView({
        threshold: 0.4,
    });

    const [refGallery, inViewGallery] = useInView({
        threshold: 0.15,
    });

    const [refContact, inViewContact] = useInView({
        threshold: 0.5
    });

  return (
    <Router>
        <IntroductionContext.Provider value={{ refIntro, inViewIntro }}>
            <AboutMeContext.Provider value={{ refAboutMe, inViewAboutMe }}>
                <ProjectGalleryContext.Provider value={{ refGallery, inViewGallery }}>
                    <ContactContext.Provider value={{ refContact, inViewContact }}>
                        <Header />
                        <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Navigate to="/" replace />} />
                        <Route path="/projects/:id" element={<Project />} />
                        <Route path="*" element={<Error />} />
                        </Routes>
                        <Contact />
                    </ContactContext.Provider>
                </ProjectGalleryContext.Provider>
            </AboutMeContext.Provider>
        </IntroductionContext.Provider>
    </Router>
  );
};

export default App;
