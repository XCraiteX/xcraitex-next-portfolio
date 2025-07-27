"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const RotationCard = ({ img, title, description, imgClass }: { img: string; title: string; description: string; imgClass?: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <StyledWrapper onClick={handleClick} isFlipped={isFlipped}> {/* Убрали isFlipped из div */}
      <div className="card-container mx-6">
        <div className="card-front">
            <div className="card-content">
              <Image src={img} alt="icon" width={90} height={90} className={imgClass} />
              <span className="text-2xl mt-2 font-bold">{title}</span>
          </div>
        </div>
        <div className="card-back">
        <div className="card-content">
            <span className="text-md p-2 text-center text-white/80">{description}</span>
        </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ isFlipped: boolean }>`
  /* Базовые стили */
  cursor: pointer;

  /* Условные стили на основе isFlipped */
  ${({ isFlipped }) => css`
    .card-container {
      position: relative;
      width: 190px;
      height: 300px;
      transition: transform 0.8s;
      transform-style: preserve-3d;
      ${isFlipped ? 'transform: rotateY(180deg);' : ''} /* Поворот контейнера */
    }

    .card-front,
    .card-back {
    background: linear-gradient(43deg, rgba(255, 0, 255, 0.3) 0%, rgba(0, 255, 255, 0.2) 100%);
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.5);
      top: 0;
      left: 0;
    }

    .card-front {
      color: #fff;
      transform: rotateX(-55deg) rotateY(18deg) rotateZ(45deg);
      transition: transform 0.8s; /* Добавлено */

      &::before {
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
      }
    }

    .card-back {
      color: white;
      transform: rotateY(180deg);
    }
  `}


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

  &:hover .card-front {
    transform: rotate(0deg);
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export default RotationCard;