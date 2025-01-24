import React,{useState} from 'react'
import "../styles/Home.css"
import logopng from "../assets/logo.webp"
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import toprightmg from "../assets/topleftmg.webp"
import bottomrightmg from "../assets/bottomrightmg.webp"
import simpleanimebg from "../assets/singleanimbc.webp"
import wave from "../assets/wave.svg"
import { motion } from 'motion/react';
const Home = () => {
  const [loopAnimation, setLoopAnimation] = useState(false);
  let text = "We Have The Ability To Stay Connect With You"
  return (
    <>
      <nav className='nav'>
        <img src={logopng} alt="" />
        {/* <ul>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Portfolio</li>
      <li>contact us</li>
    </ul> */}
      </nav>
      <div className='page1'>
         
        <div className='contactinfo'>
          <div className='gmail'><MdEmail size={20} color='white' /><p>hubitservices@gmail.com</p></div>
          <div className='othercontact'><FaFacebook color='white' size={25} /><FaFacebook color='white' size={25} /><FaFacebook color='white' size={25} /></div>
        </div>
        <div className="line"></div>
        <div className="maincontaint">
          <h1>
            <span><motion.img
              initial={{ right: "-100%" }}
              animate={{ right: "120%" }}
              transition={{ ease: "easeInOut", duration: 1 }}
              src={simpleanimebg} alt="" className='mainheadingmagnet' /></span>
            <motion.span
              initial={{ right: "-100%" }}
              animate={{ right: "0" }}
              transition={{ ease: "easeInOut", duration: 0.6, delay: 0.4 }}
              className='mainheading'>CONNECT
              YOURSELF</motion.span>
              </h1>
               <h1>
              <motion.span
              initial={{ left: "-100%" }}
              animate={{ left: "0" }}
              transition={{ ease: "easeInOut", duration: 0.6, delay: 0.4 }}
              className='mainheading2'>WITH US
              </motion.span>
              <span>
              <motion.img
              initial={{ left: "-100%" }}
              animate={{ left: "120%" }}
              transition={{ ease: "easeInOut", duration: 1 }}
              src={simpleanimebg} alt="" className='mainheadingmagnet2' /></span>
                
                </h1>
          <p><motion.span
          initial={{ opacity: "0" }}
          animate={{ opacity: "1" }}
          transition={{ ease: "easeInOut", duration: 0.5 ,delay:1}}
          >{"{"}</motion.span><motion.div
          initial={{ width: "0" }}
          animate={{ width: "100%" }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
          >{text}</motion.div><motion.span
          initial={{ opacity: "0" }}
          animate={{ opacity: "1" }}
          transition={{ ease: "easeInOut", duration: 0.5, delay:1}}
          >{"}"}</motion.span></p>
          <motion.button
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
          transition={{
            ease: [0.42, 0, 0.58, 1],
            duration: 1.5, 
            delay: 2,
          }}
          >LEARN MORE</motion.button>
        </div>
        <motion.img
        initial={{ top: "-50%", left: "-50%" }}
        animate={loopAnimation ? {
          top: ["0", "-2%", "0", "-2%"],
          left: ["0", "-2%", "0", "-2%"],
        } : { top: "0", left: "0" }}
        transition={
          loopAnimation
            ? {
                ease: "easeIn",
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : {
                ease: "easeOut",
                duration: 0.6,
                delay: 2,
              }
        }
        onAnimationComplete={() => setLoopAnimation(true)} // Trigger looping animation
        className="topleftmg"
        src={toprightmg}
        alt=""
      />

      {/* Bottom Right Image */}
      <motion.img
        initial={{ bottom: "-50%", right: "-50%" }}
        animate={loopAnimation ? {
          bottom: ["0", "-2%", "0", "-2%"],
          right: ["0", "-2%", "0", "-2%"],
        } : { bottom: "0", right: "0" }}
        transition={
          loopAnimation
            ? {
                ease: "easeInOut",
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : {
                ease: "easeOut",
                duration: 0.6,
                delay: 2,
              }
        }
        onAnimationComplete={() => setLoopAnimation(true)} // Trigger looping animation
        className="bottomrightmg"
        src={bottomrightmg}
        alt=""
      />

      </div>
      <img className='page1waveimg' src={wave} alt="" />
    </>
  )
}

export default Home
