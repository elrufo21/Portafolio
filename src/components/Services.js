import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const skills = [
  {
    name: "Lenguajes",
    description: "  Dentro de los lenguajes que domino con mayor destreza se encuentran PHP, HTML, CSS, JavaScript y SQL, los cuales cuento con una amplia experiencia.",
  },
  {
    name: "Frameworks",
    description: "Cuento con experiencia en Laravel (PHP), Next.js (JavaScript) y Bootstrap (CSS). Esto me permite trabajar de manera más rápida y eficiente.",

  },
  {
    name: "Habilidades blandas",
    description: "Comunicacion, creativo, pensamiento critico, adaptabilidad, habilidad para aprender, gestion del tiempo, empatia",

  },
  {
    name: "Otros conocimientos",
    description: "React, Python, C#, XAMARIN Forms, Unity, UML, R, Data science, machine learning, IA, Prompt engineer y big data. "
  }

]
const Services = () => {

  return (
    <section className="section" id="services">
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>

          <motion.div
            variants={fadeIn('right', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten
                mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>
              Mis skills
            </h2>
            <h3 className='h3 max-2-[455px] mb-16'>
              Soy desarrollador web fullstack con 2 años de experiencia.
            </h3>
            {/* <button className='btn btn-sm'>See my work</button> */}
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            <div >
              {
                skills.map((skill, index) => {
                  return (
                    <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                      <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wider font-primary
                        font-semibold mb-6'>{skill.name}</h4>
                        <p>{skill.description}</p>
                      </div>
                      <div className='flex flex-col flex-1 items-end'>
                        <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center
                        items-center'>
                          <BsArrowUpRight />
                        </a>
                      </div>
                      <div>

                      </div>
                    </div>
                  )
                })
              }
            </div>
          </motion.div>
        </div>
      </div>
    </section>);
};

export default Services;
