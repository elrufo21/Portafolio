import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from "../assets/educalma.png"
import Img2 from "../assets/jj.png"
import Img3 from "../assets/portfolio-img3.png"
const Work = () => {
  return (
    <section className="section" id="work">
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10 '>
          <a href="https://educalma.fundacioncalma.org/">

          </a>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <div>
              <h2 className='h2 leading-tight text-accent'>
                Mis ultimos <br />
                empleos
              </h2>
              <p className='max-w-sm mb-16'>
                Fundacion Calma, Wisbac y Orange 360 fueron mis
                ultimos y primeros empleos, es estos me desempeñe
                como desarrollador web
              </p>
              <button className='btn btn-sm'>Ver GitHub</button>
            </div>

            <a href="https://educalma.fundacioncalma.org/">
              <div className='group relative overflow-hidden border-2 border-white/50
            rounded-xl'>
                <div className='group-hover:bg-black/70 w-full h-full absolute 
              z-40 tansition-all duration-300'></div>

                <img className='group-hover:scale-125 transition-all duration-500'
                  src={Img1}
                  alt="" />

                <div className='absolute -bottom-full left-12 group-hover:bottom-24 
              transition-all duration-500 z-50'>
                  <span className='text-gradient'>Fundacion Calma</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 
              transition-all duration-500 z-50'>
                  <span className='text-3x1 text-white'>Educalma</span>
                </div>
              </div>
            </a>
          </div>
          <div className='flex-1 flex gap-y-10 flex-col'>
            <a href="https://jjcorredores.pe/">
              <div className='group relative overflow-hidden border-2 border-white/50
              rounded-xl'>
                <div className='group-hover:bg-black/70 w-full h-full absolute 
              z-40 tansition-all duration-300'></div>

                <img className='group-hover:scale-125 transition-all duration-500'
                  src={Img2}
                  alt="" />

                <div className='absolute -bottom-full left-12 group-hover:bottom-24 
              transition-all duration-500 z-50'>
                  <span className='text-gradient'>Wisbac</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 
              transition-all duration-500 z-50'>
                  <span className='text-3x1 text-white'>J-J corredores de seguros</span>
                </div>
              </div>
            </a>
            <a href="https://orange-360.com/">
              <div className='group relative overflow-hidden border-2 border-white/50
              rounded-xl'>
                <div className='group-hover:bg-black/70 w-full h-full absolute 
              z-40 tansition-all duration-300'></div>

                <img className='group-hover:scale-125 transition-all duration-500'
                  src={Img3}
                  alt="" />

                <div className='absolute -bottom-full left-12 group-hover:bottom-24 
              transition-all duration-500 z-50'>
                  <span className='text-gradient'>Orange Latam</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 
              transition-all duration-500 z-50'>
                  <span className='text-3x1 text-white'>Sistema de administracion</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>);
};

export default Work;
