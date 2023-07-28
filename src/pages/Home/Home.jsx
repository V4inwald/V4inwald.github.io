import './home.scss'
import Introduction from '../../component/Introduction/Introduction';
import AboutMe from '../../component/AboutMe/AboutMe';
import ProjectGallery from '../../component/ProjectGallery/ProjectGallery';


export default function Home() {
    return (
      <main>
        <Introduction />
        <AboutMe />
        <ProjectGallery />
      </main>
    )
}
