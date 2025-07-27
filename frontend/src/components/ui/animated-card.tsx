"use client"
import { AnimatePresence } from 'motion/react';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'motion/react';


const AnimatedCard = ({ img, title, description, imgClass }: { img: string, title: string, description: string, imgClass?: string}) => {
  
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const changeFlip = () => {
    setTimeout(() => setIsFlipped(!isFlipped))
    
  }
  
  return (
    <StyledWrapper>
      <div className='container'>
        <div className="card mx-6 p-2 items-center my-2" onClick={changeFlip}>
            { isFlipped == false && (
              <AnimatePresence mode='sync'>
                <motion.div
                  initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -60, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "backOut" }}
                  key="face" className='flex flex-col items-center'>
                  
                  <img src={img} alt='icon' width={90} height={90} className={imgClass}/>
                  <span className='text-2xl mt-2'>{title}</span>
                </motion.div>
              </AnimatePresence>
            )}

            { isFlipped && (
              <AnimatePresence mode='sync'>
                <motion.div 
                  initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.3, ease: "backOut" }}
                  key="content" className='p-4 text-center'>
                  <span className='text-[17px] mt-2'>{description}</span>
                </motion.div>
              </AnimatePresence>)
            }
            <div className='absolute w-full h-full'></div>          
        </div>
        </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    background-color: #fff;
    width: 200px;
    height: 320px;
    box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.5);
    // border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 12px;
    transition: 0.5s;
    cursor: pointer;
    transform: rotateX(-55deg) rotateY(18deg) rotateZ(45deg);
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }

.container{
animation: idle 5s linear infinite;}

  .card:active {
    scale: 1.01;
    transition: .4s;
  }

  @keyframes animate {
    0% {
      opacity: 0.3;
    }

    80% {
      opacity: 1;
    }

    100% {
      opacity: 0.3;
    }
  }

  @keyframes idle {
    0% {
      transform: translate(0, 8px) rotateX(5deg) rotateZ(-5deg)
    }

    10% {
      transform: translate(0, 8px) rotateX(5deg) rotateZ(-5deg)
    }

    50% {
      transform: translate(0, -8px) rotateX(0deg) rotateZ(0)
    }

    90% {
      transform: translate(0, 8px) rotateX(5deg) rotateZ(-5deg)
    }

    100% {
      transform: translate(0, 8px) rotateX(5deg) rotateZ(-5deg)
    }
  }

  .card:hover {
    transform: rotate(0deg) scale(1.1) !important;
    opacity: 1;
    transition: transform 0.3s ease-out, opacity 0.3s ease-out !important;
    animation: none !important;
  }

  .card, .card::before {
    //background: linear-gradient(43deg, rgba(65, 88, 208, 0.7) 0%, rgba(200, 80, 192, 0.7) 46%, rgba(255, 204, 112, 0.7) 100%);
    background: linear-gradient(43deg, rgba(255, 0, 255, 0.3) 0%, rgba(0, 255, 255, 0.2) 100%);
  }

  .card::before {
    content: '';
    width: 120%;
    height: 110%;
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 15px;
    transform: translate(-50%, -50%);
    filter: blur(30px);
    animation: animate 5s linear infinite;
  }`;

export default AnimatedCard;
