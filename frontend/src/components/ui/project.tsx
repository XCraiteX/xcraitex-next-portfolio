"use client";
import { projectScheme } from "@/types";
import styled from "styled-components";

export default function Project (props: projectScheme) {
  return (
    <StyledWrapper>
      <div className="relative w-[520px] h-[270px] rounded-2xl group hover:scale-[1.05] duration-[0.3s] proj">
        
        {/* Радужный фон */}
        <div className="absolute inset-0 rainbow-bg rounded-2xl"></div>

        <div className="absolute inset-[0.6]">
            {/* Фоновое изображение */}
            <div
                className="absolute inset-0 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${props.image})` }}
            ></div>

            {/* background: linear-gradient(45deg, #00ffff, #ff00ff, #00ffff, #ff00ff); */}

            <a href={props.link} target="_blank"><div className="absolute inset-0 bg-black/20 rounded-lg"></div></a>
        
      

            <div className="absolute flex justify-between items-end bottom-0 left-0 right-0 w-full p-5 bg-linear-to-t from-black/80 to-black/0 text-white rounded-lg">
                <div>
                    <h3 className="text-xl font-semibold">{props.name}</h3>
                    <p className="text-sm text-gray-300">{props.detail}</p>
                </div>
                <p>{props.domain}</p>
            </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
    .rainbow-bg {
        background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100% );
        transform: rotate(0deg) scale(0.95);
        transition: transform 0.2s;
        z-index: -1;
    }

    .proj:hover .rainbow-bg {
        transform: rotate(-5deg);
    }
`