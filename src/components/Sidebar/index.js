import {Link , NavLink} from 'react-router-dom'
import './index.scss'
import logos from '../../assets/images/logos.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faUser,faEnvelope,faBars,faClose} from '@fortawesome/free-solid-svg-icons'
import{faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'
import{ useState } from 'react'
// import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
// import name from'../../assets/images/sayak.png'

const Sidebar = ()=> {
    const [showNav, setShowNav] = useState(false);
     return(
    <div className="nav-bar">
        <Link className="logos" to="/">
            <img src={logos} alt="logo" />
            {/* <img className="sub-logo" src={name} alt="logo" /> */}
        </Link> 
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon = {faHome} color= "#FEE715FF"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about" to="/about" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon = {faUser} color= "#FEE715FF"/>
             </NavLink>
             
            <NavLink exact="true" className="contact" activeclassname="active" to="/contact" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon = {faEnvelope} color= "#FEE715FF"/>
            </NavLink>
            <FontAwesomeIcon icon={faClose}
            onClick={() => setShowNav(false)} color="#FEE715FF"
            size="3x"
            className='close-icon'/> 
          </nav> 
        <ul>
            <li>
                <a target ="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sayak-singha-a13b47190/">
                <FontAwesomeIcon icon={faLinkedin} color="#FEE715FF" />
                
                </a>
            </li>  
            <li>
                <a target ="_blank" rel="noreferrer" href="https://github.com/Sayak-singha">
                <FontAwesomeIcon icon={faGithub} color="#FEE715FF" />
                
                </a>
            </li>
        </ul>
         <FontAwesomeIcon icon={faBars}
         onClick={() => setShowNav(true)}
          color="#FEE715FF"
          size="3x"
          className='hamburger-icon'/>
    </div>
     )
}

export default Sidebar
 