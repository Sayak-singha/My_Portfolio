// import LogoTitle from '../../assets/images/SAYAK.png'
import{Link} from 'react-router-dom'
import './index.scss'
import Logo from './Logo'
import {Loader} from 'react-loaders'
const Home = () =>{
    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hi,<br />  I'm<span className="name">   SAYAK</span> 
                <br />
                currently pursuing my B.tech from Meghnad Saha Institute of Technology
                </h1>
                <h2>Welcome to my site</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
           <Logo/>
        </div>   
        <Loader type = "pacman"/>
        </>

    )
}
export default Home