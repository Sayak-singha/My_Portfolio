import './index.scss'
import {faHtml5,faReact,faCss3,faJsSquare,faJava,faGitAlt} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Loader} from 'react-loaders'

const About = () =>{
    return(
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>About <span className="me">Me</span></h1>
                    <p> I am thrilled to welcome you to my portfolio website. I am currently a third-year college student with a passion for coding and all things technology.</p>
                <p>Over the years, I have worked hard to develop my skills and knowledge of coding. </p>
                <p>Thank you for taking the time to visit my portfolio website. I hope that my passion for coding shines through in my work and that you find my projects engaging and inspiring. </p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faJava} color=""/>
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                </div>
            </div>
        </div>
    </div>
    <Loader type="pacman"/>
    </>
    )
}
export default About