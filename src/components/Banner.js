import React from 'react';
import Image from '../assets/avatar.png';
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { Link } from 'react-scroll';

const Banner = () => {
  function sendEmail() {
    window.location.href = 'mailto:neburtnt@gmail.com?subject=Asunto del correo&amp;body=Cuerpo del correo';
  }
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center
    " id="home">
      <div className='container mx-auto'>
        <div className=' flex flex-col gap-y-8 lg:flex-row
         lg:items-center lg:gap-x-12 '>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.4)} initial="hidden"
              whileInView={"show"} viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]
            '>
              Ruben <span>Vasquez</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden"
              whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className='mb-6 text-[36px] lg:text-[60px] font-secondary
            font-semibold uppercase leading-[1] min-h-[5vh] lg:min-h-[13vh]'>
              <span className='mr-4 text-white'>Soy </span>
              <TypeAnimation
                sequence={
                  [
                    'Eterno estudiante de TI ', 2000,
                    'ingeniero de software ', 2000,
                    'fullstack developer', 2000,
                    'Analista de sistemas', 2000,
                  ]
                } speed={50}
                className='text-accent '
                wrapper='span'
                repeat={Infinity} />
            </motion.div>
            <motion.p className='mb-8 max-w-ñg lg:mx-0'
              variants={fadeIn('up', 0.4)} initial="hidden"
              whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>Velit tempor irure eu consectetur fugiat sit
              nulla adipisicing nostrud adipisicing nostrud
              occaecat consequat aliqua. Lorem quis
            </motion.p>
            <motion.div className='flex max-w-max gap-x-6 items-center mb-12
            mx-auto lg:mx-0'
              variants={fadeIn('up', 0.6)} initial="hidden"
              whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
              <button className='btn btn-lg' onClick={sendEmail}>Contacto</button>
              <Link to='work' activeClass="active">
                <a href="#" className='text-gradient btn-link'>
                  Mi Portafolio
                </a>
              </Link>
            </motion.div>

            <motion.div className='flex text-[20px] gap-x-6 max-w-max 
            mx-auto lg:mx-0'
              variants={fadeIn('up', 0.7)} initial="hidden"
              whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
              <a href="https://www.youtube.com/channel/UC1rQ_7-V2P6GrSJFt3Vi8yg">
                <FaYoutube />
              </a>
              <a href="https://github.com/elrufo21">
                <FaGithub />
              </a>
              {/* <a href="">
                <FaDribbble />
              </a> */}
            </motion.div>
          </div>
          <motion.div
            className='hidden lg:flex flex-1 max-w-[320px] 
          lg:max-w-[480px]'
            variants={fadeIn('down', 0.3)} initial="hidden"
            whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Banner;
