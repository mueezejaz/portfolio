import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'motion/react';
import "../styles/Home.css"

import { MdEmail } from "react-icons/md";
import chapalBuilders from "../assets/reviews images/Chapal-Builders-DP.png"
import CleanMatic from "../assets/reviews images/Clean-Matic-DP.png"
import FaizanSteel from "../assets/reviews images/Faizan-Steel-DP.jpg"
import PacificCooking from "../assets/reviews images/Pacific-Cooking-Oil-DP.png"
import UMDCimg from "../assets/reviews images/UMDC-DP.png"
import UnitedHospital from "../assets/reviews images/United-Hospital-DP.png"
import { FaFacebook } from "react-icons/fa6";
import toprightmg from "../assets/topleftmg.webp"
import bottomrightmg from "../assets/bottomrightmg.webp"
import { AiOutlineInstagram } from "react-icons/ai";
import { RiStarSFill } from "react-icons/ri";
import logo from "../assets/white hubit logo.webp"
import { TbBrandWhatsappFilled } from "react-icons/tb";
import wave from "../assets/wave.svg"
import bulb from "../assets/bulb.webp"
import bulb2 from "../assets/bulb 2.webp"
import { useMotionValue, motion, animate } from 'motion/react';
const Home = () => {
  const [loopAnimation, setLoopAnimation] = useState(false);
  const counterRef = useRef(null)
  const count = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);

  const isnumbersInView = useInView(counterRef, { once: true });
  useEffect(() => {
    if (isnumbersInView) {
      const controls = animate(count, 150, {
        duration: 3,
        onUpdate: latest => {
          count.set(Math.floor(latest));
        }
      });
      const controls2 = animate(count2, 200, {
        duration: 3,
        onUpdate: latest => {
          count2.set(Math.floor(latest));
        }
      });
      const controls3 = animate(count3, 7, {
        duration: 3,
        onUpdate: latest => {
          count3.set(Math.floor(latest));
        }
      });
      return () => {controls.stop();controls2.stop();controls3.stop();} 
    }
  }, [isnumbersInView, count,]);
  
  const Htext1 = "CONNECT YOURSELF"
  const Htext2 = "WITH US"
  const ptext1 = "We Have The Ability To Stay"
  const ptext2 = "Connect With You"


  const servicesData =  [
    {
      title: "GRAPHICS & UI/UX DESIGNING",
      description: "Elevate your brand with captivating Graphics & UI/UX design.",
      buttonText: "Get a Quote",
      icon: "🎨", // Replace with actual icon if using an icon library
    },
    {
      title: "WEB & APP DEVELOPMENT",
      description: "Transform ideas into reality with Web & App Development.",
      buttonText: "Get a Quote",
      icon: "💻",
    },
    {
      title: "BRAND IDENTITY & MERCHANDISING",
      description: "Build a strong identity through Brand Identity & Merchandising.",
      buttonText: "Get a Quote",
      icon: "🧠",
    },
    {
      title: "SOCIAL MEDIA MARKETING",
      description: "Amplify your presence with Social Media Marketing.",
      buttonText: "Get a Quote",
      icon: "📢",
    },
    {
      title: "SEARCH ENGINE OPTIMIZATION",
      description: "Boost visibility with expert Search Engine Optimization.",
      buttonText: "Get a Quote",
      icon: "🔍",
    },
    {
      title: "BUSINESS GROWTH SOLUTION",
      description: "Fuel growth with tailored Business Growth Solutions.",
      buttonText: "Get a Quote",
      icon: "🏢",
    },
    {
      title: "ECOMMERCE SOLUTION",
      description: "Expand your reach with Ecommerce Solutions.",
      buttonText: "Get a Quote",
      icon: "🛒",
    },
    {
      title: "WEBSITE MAINTENANCE",
      description: "Ensure seamless performance with Website Maintenance.",
      buttonText: "Get a Quote",
      icon: "⚙️",
    },
    {
      title: "CONTENT CREATION",
      description: "Engage audiences through compelling Content Creation.",
      buttonText: "Get a Quote",
      icon: "📝",
    },
  ];
  const reviewsData = [
    {
      name: "Aamir Baghani",
      designation: "Director",
      company: "Faizan Steel",
      testimonial:
        "We started searching for a new advertising agency for a project and ended up with Hubit’s talented team. We got the work done in time and exactly the way we wanted. We will definitely work with them as we are glad we made the right choice by putting our trust in Hubit.",
      rating: 5,
      img:FaizanSteel
    },
    {
      name: "Ahmed Chapal",
      designation: "CEO",
      company: "Chapal Builders",
      testimonial:
        "I am impressed with the core knowledge and dedication of the team headed by Wajid. Hubit is the best solution provider for a beginner in the digital world and professional for those who already have digital footprints.",
      rating: 5,
      img:chapalBuilders
    },
    {
      name: "Rais Ur Rehman",
      designation: "Director",
      company: "Pacific Cooking Oil",
      testimonial:
        "Hubit’s team is super creative, motivated and amazingly responsive. It was a marvelous experience working with them because they didn’t disappoint me.",
      rating: 5,
      img:PacificCooking
    },
    {
      name: "Adeel Sarfraz",
      designation: "General Manager",
      company: "United Hospital",
      testimonial:
        "Hubit is a reliable and trusted agency that delivers what it promises. We started working with them a few years ago, and because of their brilliant performance, we have formed a long-term working relationship with them.",
      rating: 5,
      img: UnitedHospital
    },
    {
      name: "Mustufa Baari",
      designation: "Director",
      company: "Clean Matic",
      testimonial:
        "Hubit has a professional team who carefully listened to my ideas and came up with the product as per my requirements and expectations. I recommend their services because they will not disappoint you.",
      rating: 5,
      img: CleanMatic
    },
    {
      name: "Ali Raza",
      designation: "Manager Administration",
      company: "UMDC",
      testimonial:
        "A few years ago, we reached out to Hubit to get our corporate website developed and since then we are working with them. They listen to us and produce quality work as per our expectations. We have confidence in the team and their work.",
      rating: 5,
      img: UMDCimg
    },
  ];
  const plans = [
    {
      title: "STARTER",
      price: "$499",
      duration: "Monthly",
      features: [
        "✔ Unlimited print & digital graphics",
        "✔ Logos & branding",
        "✔ Ad creatives",
        "✔ Social media designs",
        "✘ Web designs",
        "✘ Presentation designs",
        "✘ Motion graphics",
      ],
      notes: [
        "1 project at a time",
        "Designer’s schedule: Night time EST",
      ],
      buttonText: "Choose Starter",
      highlighted: false,
    },
    {
      title: "MARKETER",
      price: "$999",
      duration: "Monthly",
      features: [
        "✔ Unlimited print & digital graphics",
        "✔ Logos & branding",
        "✔ Ad creatives",
        "✔ Social media designs",
        "✔ Web designs",
        "✔ Presentation designs",
        "✘ Motion graphics",
      ],
      notes: [
        "1 project at a time",
        "Designer’s schedule: Night time EST",
      ],
      buttonText: "Choose Marketer",
      highlighted: false,
    },
    {
      title: "AGENCY",
      price: "$1499",
      duration: "Monthly",
      features: [
        "✔ Unlimited print & digital graphics",
        "✔ Logos & branding",
        "✔ Ad creatives",
        "✔ Social media designs",
        "✔ Web designs",
        "✔ Presentation designs",
        "✔ Motion graphics",
      ],
      notes: [
        "2 projects at a time",
        "Designer’s schedule: Night time EST",
      ],
      buttonText: "Choose Agency",
      highlighted: false,
    },
  ];
  const whyChooseUsData = [
    {
      title: "Idea",
      description: "Our designs start from an idea.",
      icon: "💡",
    },
    {
      title: "Connections",
      description: "Connection with the clients is our first priority.",
      icon: "🔗",
    },
    {
      title: "Creativity",
      description: "We create your projects with next-level creativity.",
      icon: "🎨",
    },
  ];
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
      <div className='page1'>

        <div className='contactinfo'>
          <div className='gmail'><img src={logo} alt="" /></div>
          <div className='othercontact'><span><a href="https://www.facebook.com/profile.php?id=100089780566681"><FaFacebook color='white' size={22} /></a></span>|<span><a href="https://www.instagram.com/hub._it?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><AiOutlineInstagram color='white' size={22} /></a></span>|<span><a href="https://wa.me/+923268007094"><TbBrandWhatsappFilled color='white' size={22} /></a></span></div>
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
          <div className='btncontainer'>
          <motion.button
          className='btn1'
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeIn",
              duration: 0.3,
              delay: 3,
            }}
          ><a href="https://www.behance.net/4daa6af6">Portfolio</a></motion.button>
          <motion.button
          className='btn2'
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeIn",
              duration: 0.3,
              delay: 3.5,
            }}
          ><a href="#services">Services</a></motion.button>
          </div>
          
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
      <div className="page3">
        <div className="margin">
      <div className="why-choose-us-container">
      <div className="why-choose-us-header">
        <h2>Why Choose Us?</h2>
        <p>
          Partnering with us means gaining a team that values your vision,
          prioritizes client connections, and delivers creative excellence.
        </p>
      </div>
      <div className="why-choose-us-grid">
        {whyChooseUsData.map((item, index) => (
          <motion.div
         
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
          key={index}
          className="why-choose-us-card">
            <div className="card-icon">{item.icon}</div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
      </div>
      
      <section className="page2" id='services'>
        <h1 className='page2-heading'>OUR SERVICES</h1>
        <p>Over a decade of expertise, we craft tailored
        digital solutions to  bring your vision to life.</p>
        
        <div className="services-container">
          {servicesData.map((current, i) => (
            < motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 ,ease:"linear"}}
              viewport={{ once: true, amount: 0.1 }}
              className="services-box">
              <div className='upper-section'>
                <span> {current.icon}</span>
              </div>
              <div className="lower-section">
                <h1>{current.title}</h1>
              </div>
            </motion.div>
          ))}

        </div>
      </section>
      
      <div className="page5-reviews">
        <div className="margin">
          <div className="heading-text-container">
            <h3>Client Reviews</h3>
            <p>They love us for a reason</p>
            <div className='line-under-text'></div>
          </div>

          <div className="testimonial-box-container">
            {
              reviewsData.map((data, index) => (
                <motion.div
                  className="testimonial-box"
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className="box-top">
                    <div className="profile">
                      <div className="profile-img">
                        <img src={data.img} />
                      </div>
                      <div className="name-user">
                        <strong>{data.name}</strong>
                        <span>{data.company} || {data.designation}</span>
                      </div>
                    </div>
                    <div className="reviews">
                      <RiStarSFill/>
                      <RiStarSFill/>
                      <RiStarSFill/>
                      <RiStarSFill/>
                      <RiStarSFill/>
                    </div>
                  </div>
                  <div className="client-comment">
                    <p>{data.testimonial}</p>
                  </div>
                </motion.div>
              ))
            }
          </div>
        </div>
        <div ref={counterRef} className="counter-container">
          <div className="overlay-svg">
            <svg
              id="wave"
              style={{ transform: "rotate(180deg)", transition: "0.3s" }}
              viewBox="0 0 1440 120"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                  <stop stopColor="rgba(255, 255, 255, 1)" offset="0%" />
                  <stop stopColor="rgba(255, 255, 255, 1)" offset="100%" />
                </linearGradient>
              </defs>
              <path
                style={{ transform: "translate(0, 0px)", opacity: 1 }}
                fill="url(#sw-gradient-0)"
                d="M0,36L20,38C40,40,80,44,120,54C160,64,200,80,240,88C280,96,320,96,360,80C400,64,440,32,480,30C520,28,560,56,600,74C640,92,680,100,720,98C760,96,800,84,840,82C880,80,920,88,960,80C1000,72,1040,48,1080,34C1120,20,1160,16,1200,14C1240,12,1280,12,1320,18C1360,24,1400,36,1440,46C1480,56,1520,64,1560,74C1600,84,1640,96,1680,92C1720,88,1760,68,1800,64C1840,60,1880,72,1920,80C1960,88,2000,92,2040,84C2080,76,2120,56,2160,58C2200,60,2240,84,2280,84C2320,84,2360,60,2400,52C2440,44,2480,52,2520,56C2560,60,2600,60,2640,50C2680,40,2720,20,2760,14C2800,8,2840,16,2860,20L2880,24L2880,120L2860,120C2840,120,2800,120,2760,120C2720,120,2680,120,2640,120C2600,120,2560,120,2520,120C2480,120,2440,120,2400,120C2360,120,2320,120,2280,120C2240,120,2200,120,2160,120C2120,120,2080,120,2040,120C2000,120,1960,120,1920,120C1880,120,1840,120,1800,120C1760,120,1720,120,1680,120C1640,120,1600,120,1560,120C1520,120,1480,120,1440,120C1400,120,1360,120,1320,120C1280,120,1240,120,1200,120C1160,120,1120,120,1080,120C1040,120,1000,120,960,120C920,120,880,120,840,120C800,120,760,120,720,120C680,120,640,120,600,120C560,120,520,120,480,120C440,120,400,120,360,120C320,120,280,120,240,120C200,120,160,120,120,120C80,120,40,120,20,120L0,120Z"
              ></path>
            </svg>
          </div>
          <div className="overlay"></div>
          <div className="margin">
            <div className="counter-container2">
              <div className="counters">
              <h3><motion.span>{count}</motion.span>+</h3>
                <p>Setisfied Clients</p>
              </div>
              <div className="counters">
                <h3><motion.span>{count2}</motion.span>+</h3>
                <p>Completed Projects</p>
              </div>
              <div className="counters">
              <h3><motion.span>{count3}</motion.span>+</h3>
                <p>Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page6">
      <div className="heading-text-container">
            <h3>Campaign Packages</h3>
            <p>We are experts in designing creative campaigns, here are some campaign solutions
            </p>
            <div className='line-under-text ' style={{marginBottom:"0"}}></div>
          </div>
      <div className="pricing-table-container">
      <div className="pricing-grid">
      {plans.map((plan, index) => (
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.1 }}
            key={index}
            className={`pricing-card highlighted`}
          >
            <h3 className="pricing-title">{plan.title}</h3>
            <p className="pricing-price">{plan.price}</p>
            <p className="pricing-duration">{plan.duration}</p>
            <ul className="pricing-features">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={feature.startsWith("✘") ? "unavailable" : ""}
                >
                  {feature}
                </li>
              ))}
            </ul>
            {plan.notes.map((note, i) => (
              <p key={i} className="pricing-note">
                {note}
              </p>
            ))}
            <button className="pricing-button"><a style={{textDecoration:"none",color:"#be181c"}} href="https://wa.me/+923268007094">{plan.buttonText}</a></button>
          </motion.div>
        ))}
      </div>
    </div>
      </div>
     <div className="footer-container">
      <h4>Copyright © 2024 | All Rights Reserved</h4>
     </div>
     <a href="https://wa.me/+923268007094" target="_blank" class="whatsapp-button">
     <TbBrandWhatsappFilled color='white' size={30} />
</a>
    </>
  )
}

export default Home
