// import { useEffect, useRef } from 'react'

import './index.scss'
import React from 'react'
import logos from '../../../assets/images/logos.png'
const Logo = () => {
  return (
    <div className="logo-container" >
    <img
      className="solid-logo"
      src={logos}
      alt="JavaScript,  Developer"
    />     
  </div>
  )
}

export default Logo



// import gsap from 'gsap'
// import DrawSVGPlugin from 'gsap/DrawSVGPlugin'

// const Logo = () => {
//   <div className="logo-container" >
//       <img
//         className="solid-logo"
//         // ref={solidLogoRef}
//         src={LogoS}
//         alt="JavaScript,  Developer"
//       />      
//     // </div>
  // const bgRef = useRef()
  // const outlineLogoRef = useRef()
  // const solidLogoRef = useRef()

  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin)
    

  //   gsap.timeline()
  //     .to(bgRef.current, {
  //       duration: 1,
  //       opacity: 1,
  //     })
  //     .from(outlineLogoRef.current, {
  //       drawSVG: 0,
  //       duration: 20,
  //     })

  //   gsap.fromTo(
  //     solidLogoRef.current,
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       delay: 4,
  //       duration: 2,
  //     }
  //   )
  // }, [])

  // return (
  //   // ref={bgRef}
    
  // )
// }

// export default Logo
