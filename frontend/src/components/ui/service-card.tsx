import { serviceScheme } from '@/types/service';
import React from 'react';
import styled from 'styled-components';

import { FaPaperclip } from "react-icons/fa6";

const ServiceCard = (props: serviceScheme) => {
  return (
    <StyledWrapper>
      <div className="e-card playing">
        <div className="image" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="infotop flex flex-col items-center gap-4 justify-center inset-0 p-4">
            {props.icon}
          {props.title}
          <div className="text-white/60 text-lg">{props.description}</div>
            <div className='flex flex-col items-center'>
                <span>от {props.price_byn}</span>
                <span>от {props.price_rub}</span>
            </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .e-card {
    background: transparent;
    box-shadow: 0px 8px 28px -9px rgba(0,0,0,0.45);
    position: relative;
    width: 240px;
    height: 330px;
    border-radius: 16px;
    overflow: hidden;
    transition: 0.2s;
  }

  .e-card:hover {
    transform: scale(1.1);
  }

  .wave {
    position: absolute;
    width: 540px;
    height: 700px;
    opacity: 0.3;
    left: 0;
    top: 0;
    margin-left: -50%;
    margin-top: -70%;
    background: linear-gradient(744deg,#af40ff,#5b42f3 60%,#00ddeb);
  }

  .infotop {
    text-align: center;
    font-size: 20px;
    position: absolute;
    left: 0;
    right: 0;
    color: rgb(255, 255, 255);
    font-weight: 600;
  }


  .wave:nth-child(2),
  .wave:nth-child(3) {
    top: 210px;
  }

  .playing .wave {
    border-radius: 40%;
    animation: wave 15000ms infinite linear;
  }

  .wave {
    border-radius: 40%;
    animation: wave 55s infinite linear;
  }

  .playing .wave:nth-child(2) {
    animation-duration: 20000ms;
  }

  .wave:nth-child(2) {
    animation-duration: 50s;
  }

  .playing .wave:nth-child(3) {
    animation-duration: 5000ms;
  }

  .wave:nth-child(3) {
    animation-duration: 45s;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }`;

export default ServiceCard;
