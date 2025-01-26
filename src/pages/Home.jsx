import React, { useState ,useEffect} from 'react'
import { useInView } from 'motion/react';
import "../styles/Home.css"
import logopng from "../assets/logo.webp"
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import toprightmg from "../assets/topleftmg.webp"
import bottomrightmg from "../assets/bottomrightmg.webp"
import simpleanimebg from "../assets/singleanimbc.webp"
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { FaThumbsUp } from "react-icons/fa6";
import { RiStarSFill } from "react-icons/ri";
import wave from "../assets/wave.svg"
import bulb from "../assets/bulb.webp"
import bulb2 from "../assets/bulb 2.webp"
import graphiclog from "../assets/graphic-design.webp"
import { RxHamburgerMenu } from "react-icons/rx";
import {useMotionValue, motion, animate} from 'motion/react';
const Home = () => {
  const [loopAnimation, setLoopAnimation] = useState(false);
  const Htext1 = "CONNECT YOURSELF"
  const Htext2 = "WITH US"
  const ptext1 = "We Have The Ability To Stay"
  const ptext2 = "Connect With You"
  const ref = React.useRef(null);
  const refstars = React.useRef(null);
  const refnumber = React.useRef(null);
  const count = useMotionValue(0)
  const isnumbersInView = useInView(refnumber, { once: true });

  useEffect(() => {
    if (isnumbersInView) {
      const controls = animate(count, 150, { 
        duration: 5, 
        onUpdate: latest => {
          count.set(Math.floor(latest));
        }
      });
      return () => controls.stop(); 
    }
  }, [isnumbersInView, count]);

  const isStarsInView = useInView(refstars, { once: true })
  const isInView = useInView(ref, { once: true });

  const servicesData = [
    {
      images: graphiclog,
      text: "Graphic Design"
    },
    {
      images: graphiclog,
      text: "Graphic Design"
    },
    {
      images: graphiclog,
      text: "Graphic Design"
    },
    {
      images: graphiclog,
      text: "Graphic Design"
    },
  ]
  const stars = [
    <RiStarSFill size={30} />,
            <RiStarSFill size={30} />,
            <RiStarSFill size={30} />,
            <RiStarSFill size={30} />,
            <RiStarSFill size={30} />,
  ]
  const pullupVariant = {
    initial: { y: 30, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 1,
      },
    }),
  };
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
                animate={{ opacity: 1, left: "0px" }}
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
                animate={{ opacity: 1, left: "0px" }}
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
                animate={{ opacity: 1, left: "0px" }}
                exit="hidden"
                transition={{ duration: 0.3, delay: Htext1.length * 0.1 + ptext2.length * 0.1 + i * 0.03, }}
              >
                {char === ' ' ? <span>&nbsp;</span> : char}
              </motion.span>
            ))}
            <br />
            {ptext2.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, left: "-10px" }}
                animate={{ opacity: 1, left: "0px" }}
                exit="hidden"
                transition={{ duration: 0.3, delay: Htext1.length * 0.1 + ptext2.length * 0.1 + i * 0.03, }}
              >
                {char === ' ' ? <span>&nbsp;</span> : char}
              </motion.span>
            ))}
          </p>
          <motion.button
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeIn",
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
      <div className="margin">
        <div className="page3">
          <div className="image-container">
            <div className="image-container2">
              <img className='puzlimg' src={bulb2} alt="" />
              <img src={bulb} className="bulbimg" /></div>
            <div className='circel-bg'>

            </div>

          </div>
          <div className="text-container">
            <h3>Hub IT Creative
              Agency</h3>
            <p>
              We achieved many victories and gained great
              appreciations from our clients. We are
              specialized in Graphic Design, branding (to
              make your business on high level) , social media,
              design and development, production, event
              management, marketing and advertising. We
              are here to give rise to your Business and take it
              to a high level
            </p>
          </div>

        </div>
      </div>
      <div className="page2">
        <h1 className='page2-heading'>OUR SERVICES</h1>
        <div ref={ref} className="services-container">
          {servicesData.map((current, i) => (
            < motion.div
              key={i}
              variants={pullupVariant}
              initial="initial"
              animate={isInView ? 'animate' : ''}
              custom={i}
              className="services-box">
              <div className='upper-section'>
                <img src={current.images} alt="" />
              </div>
              <div className="lower-section">
                <h1>{current.text}</h1>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
      <div className="page5">
      <div className="margin">
        <div className="page5-text-container">
          <h1>We Love</h1>
          <h1>Our Clints</h1>
        </div>
        <div className="page5-review-container">
         <div className="container-reviews">
          <div className="reviews-container">
            <div className="thumb">
            < motion.span
              key={2}
              variants={pullupVariant}
              initial="initial"
              animate={isStarsInView ? 'animate' : ''}>
              {<FaThumbsUp  className='thumsup' size={40} color='red' />}
            </motion.span>
            </div>
            <div ref={refstars} className="stars">
            {stars.map((current, i) => (
            < motion.span
              key={i}
              variants={pullupVariant}
              initial="initial"
              animate={isStarsInView ? 'animate' : ''}
              custom={i}>
              {current}
            </motion.span>
          ))}
            

            </div>
          </div>
          <div ref={refnumber} className="client-numbers">
            <h3><motion.span>{count}</motion.span>+</h3>
            <p>Satisfied Clients</p>
          </div>
         </div>
        </div>
      </div>
      </div>
    <div style={{height:"100vh"}}></div>
    </>
  )
}

export default Home
