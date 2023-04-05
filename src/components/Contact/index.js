import './index.scss'
import {Loader} from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'



const Contact = () => {

    const refForm = useRef();
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_knbuo5d',
            'template_2t4425g',
             refForm.current,
            'O1WFCBEfyUkVnZ9cm'
        )
        .then(
            (result) => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            (error) => {
                alert('Message cannot be sent! Try again')
            }
        )

        
    }
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                <h1>Contact <span className="me">Me</span></h1>
                    <p>
                        If you have any questions or would like to collaborate with me on a project, please feel free to contact me. You can reach me by filling the form below.
                        </p>
                        <p>Please don't hesitate to contact me. As a third-year college student with a passion for coding, I am always looking for new opportunities to learn and grow.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail} >
                            <ul>
                                <li className="half">
                                    <input type="text" name="from_name" placeholder = "Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder ="Email" required />
                                </li>
                                <li>
                                    <input type="text" placeholder="Subject" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" value="SEND" className='flat-button' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                   Sayak Singha,
                   <br />
                   India,
                    <br />
                    West Bengal <br />
                    Howrah - 711104 <br />
                    <span>sayaksingha369@gmail.com</span> 
                </div>
                <div className="map-wrap">
                <MapContainer center={[22.588541,88.318058]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={[22.588541,88.318058]}>
                    <Popup>Sayak lives here, come over for a cup of coffee !</Popup>
                </Marker>

                </MapContainer>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}
export default Contact