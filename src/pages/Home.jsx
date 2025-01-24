import React,{useState} from 'react'
import "../styles/Home.css"
import logopng from "../assets/logo.webp"
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import toprightmg from "../assets/topleftmg.webp"
import bottomrightmg from "../assets/bottomrightmg.webp"
import simpleanimebg from "../assets/singleanimbc.webp"
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import wave from "../assets/wave.svg"
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from 'motion/react';
const Home = () => {
  const [loopAnimation, setLoopAnimation] = useState(false);
  const Htext1 = "CONNECT YOURSELF"
  const Htext2 = "WITH US"
  const ptext1 = "We Have The Ability To Stay"
  const ptext2 = "Connect With You"

  return (
    <>
      <nav className='nav'>
        <img src={logopng} alt="" />
        <div className='hamcontainer'>< RxHamburgerMenu className='hamburger' size={30} /></div>
        <ul>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Portfolio</li>
      <li>contact us</li>
    </ul>
      </nav>
      <div className='page1'>
         
        <div className='contactinfo'>
          <div className='gmail'><MdEmail size={20} color='white' /><p>hubitservices@gmail.com</p></div>
          <div className='othercontact'><FaFacebook color='white' size={25} /><AiOutlineInstagram color='white' size={25} /><FiTwitter color='white' size={25} /></div>
        </div>
        <div className="line"></div>
        <div className="maincontaint">
       <h1>
       {Htext1.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, left: "-10px" }}
            animate={{ opacity: 1,  left: "0px"}}
            exit="hidden"
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
         <br />
         {Htext2.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, left: "-10px" }}
            animate={{ opacity: 1,  left: "0px"}}
            exit="hidden"
            transition={{ duration: 0.5, delay: Htext1.length * 0.1 + i * 0.1, }}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
       </h1>
       <p>
       {ptext1.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, left: "-10px" }}
            animate={{ opacity: 1,  left: "0px"}}
            exit="hidden"
            transition={{ duration: 0.3, delay:  Htext1.length * 0.1+ptext2.length * 0.1 + i * 0.03, }}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
        <br />
        {ptext2.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, left: "-10px" }}
            animate={{ opacity: 1,  left: "0px"}}
            exit="hidden"
            transition={{ duration: 0.3, delay:  Htext1.length * 0.1+ptext2.length * 0.1 + i * 0.03, }}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
       </p>
          <motion.button
          initial={{ opacity: 0,y:5}}
          animate={{ opacity: 1, y:0}}
          transition={{
            ease:"easeIn",
            duration: 0.3, 
            delay: 3,
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
