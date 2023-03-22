import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <section className="section" id="about" ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center 
        lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
            mix-blend-lighten bg-top'>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 '>
            <h2 className='h2 text-accent'>Sobre mi</h2>
            <h3 className='h3 mb-4'>
              ¡Hola! Soy Ruben Vasquez,
              un técnico en ingeniería de software con inteligencia artificial.
            </h3>
            <p className='mb-6'>
              Me apasiona la tecnología y estoy constantemente aprendiendo nuevas habilidades
              para estar actualizado en este campo en constante evolución. Estoy emocionado
              por las oportunidades que el futuro trae en el campo de la tecnología, y
              estoy seguro de que puedo contribuir al éxito de cualquier empresa con mis
              habilidades y experiencia.</p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] front-tertiary text-gradient
            mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Años de <br />
                  Experiencia
                </div>
              </div>
              <div>
                <div className='text-[40px] front-tertiary text-gradient
            mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={10} duration={5} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Contribuciones <br />
                  en proyectos
                </div>
              </div>
              <div>
                <div className='text-[40px] front-tertiary text-gradient
            mb-2'>
                  {
                    inView ?
                      <CountUp start={0} end={4} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Proyectos<br />
                  Realizados
                </div>
              </div>
              <div className='flex gap-x-8 items-center'>
                <button className='btn btn-lg'>Contacto</button>
                <a href="#" className='text-gradient btn-link'>
                  Portafolio
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
};

export default About;
