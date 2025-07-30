"use client"
import { useState } from "react";
import NavLink from "../ui/navlink";

export default function Header() {

    const [open, setOpen] = useState(false)

    return(
        <header className="flex justify-between w-full py-3 px-8 z-50 fixed h-15"> 
            <h1 className="font-bold text-2xl">XCraiteX</h1>
            <nav className="flex gap-8 items-center text-lg default-nav">
                <NavLink href="#home">Главная</NavLink>
                <NavLink href="#about">Обо мне</NavLink>
                <NavLink href="#stack">Технологии</NavLink>
                <NavLink href="#projects">Проекты</NavLink>
                <NavLink href="#services">Услуги</NavLink>
                <NavLink href="#contact">Контакты</NavLink>
                {/* <NavLink href="#rates">Отзывы</NavLink> */}
            </nav>
            
            <button
                className="fixed top-5 right-5 z-50 flex-col justify-between w-8 h-6 focus:outline-none burger-nav hidden"
                onClick={() => setOpen(!open)}
            >
                <span className="block h-[3px] bg-white/80 rounded"></span>
                <span className="block h-[3px] bg-white/80 rounded"></span>
                <span className="block h-[3px] bg-white/80 rounded"></span>
            </button>

            {/* Меню */}
            <div
                className={`fixed top-0 right-0 bottom-0 h-full w-full z-40 transition-transform duration-300
                bg-white/5 backdrop-blur-md shadow-xl text-white p-8
                ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                <nav className="flex flex-col space-y-6 text-2xl items-center justify-center h-full">
                <a href="#home" className="hover:text-pink-500 transition" onClick={() => setOpen(!open)}>Главная</a>
                <a href="#about" className="hover:text-pink-500 transition" onClick={() => setOpen(!open)}>Обо мне</a>
                <a href="#stack" className="hover:text-pink-500 transition" onClick={() => setOpen(!open)}>Технологии</a>
                <a href="#projects" className="hover:text-pink-500 transition" onClick={() => setOpen(!open)}>Проекты</a>
                <a href="#services" className="hover:text-pink-500 transition" onClick={() => setOpen(!open)}>Услуги</a>
                <a href="#contact" className="hover:text-pink-500 transition" onClick={() => setOpen(!open)}>Контакты</a>
                </nav>
            </div>
        </header>
    )
}