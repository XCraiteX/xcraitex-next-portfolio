"use client"
import { motion } from "motion/react";

import AnimatedCard from "@/components/ui/animated-card";
import ArrowButton from "@/components/ui/arrow-button";
import Header from "@/components/global/header";
import SectionCard from "@/components/ui/section-card";
import Project from "@/components/ui/project";

import { projectsData } from "@/data/projects";
import { stackData } from "@/data/stack";
import { aboutTextByWords } from "@/data/about";
import { servicesData } from "@/data/services";

import ServiceCard from "@/components/ui/service-card";
import SocialButton from "@/components/global/socials";

import { FaGithub } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { FaVk } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const RightToLeftControls = {initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }}
const BottomToUpControls = {initial: { opacity: 0, y: 10 }, whileInView: { opacity: 1, y: 0 }}
const DiagonalControls = {initial: {x: 10, y: 10, opacity: 0 }, whileInView: { x: 0, y: 0, opacity: 1}}


export default function Home() {
  return (
    <>
      <Header/>

      <main className="h-screen w-screen snap-x snap-mandatory flex overflow-hidden scroll-smooth" id="main-page-section">

        {/* HOME */}
        <SectionCard id="home" className="justify-center">
          <div className="w-[80%] flex flex-col gap-8">
            <div className="flex flex-col gap-5">   
              <motion.h1 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: 0.4}} className="text-7xl">Дмитрий Крайтекс</motion.h1>
              <motion.h1 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: 0.8}} className="text-4xl text-white/80">Fullstack Разработчик</motion.h1>
            </div>
            <motion.div variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: 1.2}}>
             <ArrowButton href="#about">Узнать больше</ArrowButton>
            </motion.div>
          </div>
        </SectionCard>

        {/* ABOUT */}
        <SectionCard id="about" className="justify-center">
          <div className="w-[80%] flex flex-col gap-8">
            <div className="flex flex-col gap-5">   
              <motion.h2 variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{duration: 0.4, delay: 0.4}} className="text-5xl">Обо мне</motion.h2>
              <p className="text-2xl text-white/60 w-[50%] about-text inline-block">
              {
                aboutTextByWords.map((word, index) => (
                  <motion.span className="inline-block mr-1" key={index} 
                    initial={{ x: 10, y: 10, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} 
                    transition={{ duration: 0.3, delay: index * 0.06 + 0.8, ease: "easeOut"}}>
                      {word}
                  </motion.span>
                ))
              }
              </p>
              {/* <p className="text-2xl text-white/60 w-[50%] about-text">Приветик. Превращаю ваши идеи в уникальные и привлекательные проекты уже более 5 лет. Знаю своё дело и знаю как его выполнять. Никаких компаний, пустых обещаний и космических цен. Только справедливая оценка потраченного времени и сопровождение на всех этапах создания проекта!</p> */}
            </div>
            <motion.div variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{ duration: 0.3, delay: 4}}>
              <ArrowButton href="#stack">Технологии</ArrowButton>
            </motion.div>
            
          </div>
        </SectionCard>


        {/* STACK */}
        <SectionCard id="stack">
          <div className="flex justify-center flex-col items-center relative w-[80%]">
            <motion.h2 variants={BottomToUpControls} 
              initial='initial' whileInView='whileInView' 
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-5xl">Используемые технологии</motion.h2>
            <motion.p variants={BottomToUpControls} 
              initial='initial' whileInView='whileInView' 
              transition={{ duration: 0.3, delay: 0.8 }}
              className="text-lg text-white/60 mt-2">
                Нажмите на карточку, чтобы увидеть подробности
            </motion.p>
            <motion.div 
              variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{ duration: 0.3, delay: 3}}
              className="absolute right-0 "><ArrowButton href="#projects">К проектам</ArrowButton></motion.div>
          </div>

          <div className="w-[80%] flex flex-wrap justify-center">
            {stackData.map((item, index) => (
              <motion.div key={index}
                variants={DiagonalControls} initial='initial' whileInView='whileInView'
                transition={{ duration: 0.2, delay: 0.2 * index + 1.2, ease: "backOut"}}
                >
                <AnimatedCard 
                  key={item.title}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  imgClass={item.imgClass}
                />
              </motion.div>
            ))}
          </div>
        </SectionCard>

        {/* PROJECTS */}
        <SectionCard id="projects">
          <div className="flex justify-center flex-col items-center relative w-[80%]">
            <motion.h2 variants={BottomToUpControls} 
              initial='initial' whileInView='whileInView' 
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-5xl">Мои проекты</motion.h2>
            <motion.p variants={BottomToUpControls} 
              initial='initial' whileInView='whileInView' 
              transition={{ duration: 0.3, delay: 0.8 }}
              className="text-lg text-white/60 mt-2">
                Как свои, так и для других людей и компаний
            </motion.p>
            <motion.div 
              variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{ duration: 0.3, delay: 3}}
              className="absolute right-0 "><ArrowButton href="#services">К услугам</ArrowButton></motion.div>
          </div>

          <div className="w-[90%] flex gap-10 justify-center mt-12 flex-wrap pb-20">
            { projectsData.map((proj, index) => (
              <motion.div key={index} variants={BottomToUpControls} 
                initial='initial' whileInView='whileInView' 
                transition={{ duration: 0.3, delay: 0.2 * index + 1.2, ease: "easeInOut" }}>

                <Project 
                  key={proj.name}
                  name={proj.name}
                  detail={proj.detail}
                  domain={proj.domain}
                  image={proj.image}
                  link={proj.link}/>
              </motion.div>
              ))}
            
          </div>
        </SectionCard>


        {/* SERVICES */}
        <SectionCard id="services">
          <div className="flex justify-center flex-col items-center relative w-[80%]">
            <motion.h2 variants={BottomToUpControls} 
              initial='initial' whileInView='whileInView' 
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-5xl">Возможные услуги</motion.h2>
            <motion.p variants={BottomToUpControls} 
              initial='initial' whileInView='whileInView' 
              transition={{ duration: 0.3, delay: 0.8 }}
              className="text-lg text-white/60 mt-2">
                Услуги которые я могу предоставить и минимальные цены
            </motion.p>
            <motion.div 
              variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{ duration: 0.3, delay: 3}}
              className="absolute right-0 "><ArrowButton href="#contact">Контакты</ArrowButton></motion.div>
          </div>

          <div className="w-[80%] flex flex-wrap gap-12 justify-center mt-12 pb-20">
            { servicesData.map((service, index) => (
              <motion.div key={index} variants={BottomToUpControls} 
                initial='initial' whileInView='whileInView' 
                transition={{ duration: 0.3, delay: 0.2 * index + 1.2, ease: "easeInOut" }}>
                <ServiceCard {...service}/>
              </motion.div>
            ))}
          </div>
        </SectionCard>

        {/* CONTACT */}
        <SectionCard id="contact">
          <div className="flex justify-center flex-col items-center relative w-[80%]">
            <motion.h2 variants={BottomToUpControls} 
              initial='initial' whileInView='whileInView' 
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-5xl">Контакты</motion.h2>
            <motion.p variants={BottomToUpControls} 
              initial='initial' whileInView='whileInView' 
              transition={{ duration: 0.3, delay: 0.8 }}
              className="text-lg text-white/60 mt-2">
                Способы связи и будущего сотрудничества
            </motion.p>
            {/* <motion.div 
              variants={RightToLeftControls} initial='initial' whileInView='whileInView' transition={{ duration: 0.3, delay: 3}}
              className="absolute right-0 "><ArrowButton href="#rates">Отзывы</ArrowButton></motion.div> */}
          </div>
          <div className="mt-12 w-[80%]">
            <motion.div 
              variants={BottomToUpControls} initial='initial' whileInView='whileInView' transition={{ duration: 0.3, delay: 1.2}}
              className="flex gap-8 justify-center">
              <SocialButton text="Telegram" href="http://t.me/xcraitex" className="bg-[#1775ce]" icon={<RiTelegram2Fill/>}/>
              <SocialButton text="VKontakte" href="https://vk.com/rlcraitex" className="bg-[#144a88]" icon={<FaVk/>}/>
              <SocialButton text="Discord" href="http://t.me/xcraitex" className="bg-[#1a116d]" icon={<FaDiscord/>}/>
              <SocialButton text="GitHub" href="https://github.com/XCraiteX" className="bg-black" icon={<FaGithub/>}/>
            </motion.div>
          </div>
        </SectionCard>
        
      </main>
    </>
  );
}