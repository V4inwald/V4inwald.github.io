import styles from './header.module.scss';
import logo from '../../assets/images/logo-temp.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <Link to="/" ><img src={logo} alt="Josemaria Links" /></Link>
      </h1>
      <nav className={styles.nav}>
        <Link to="/" >Accueil</Link>
        <Link to="/about" >A Propos</Link>
      </nav>
    </header>
  )
}