"use client"
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const TechCard = ({ img, title, description, imgClass }: { img: string, title: string, description: string, imgClass?: string}) => {
  return (
    <StyledWrapper>
        <div className='mx-6'>
            <div className="card flex-col">
                <Image src={img} alt='icon' width={90} height={90} className={imgClass}/>
                <span className='text-2xl mt-2'>{title}</span>
                <span className='p-2 text-sm text-center text-white/80'>{description}</span>
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
    //border: 1px solid rgba(255, 255, 255, 0.4);
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

  .card:active {
    scale: 1.1;
    rotate: 5deg;
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

  .card:hover {
    transform: rotate(0deg);
    opacity: 1;
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

export default TechCard;
