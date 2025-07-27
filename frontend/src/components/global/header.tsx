import NavLink from "../ui/navlink";

export default function Header() {
    return(
        <header className="flex justify-between w-full py-3 px-8 z-50 fixed h-15"> 
            <h1 className="font-bold text-2xl">XCraiteX</h1>
            <nav className="flex gap-8 items-center text-lg">
                <NavLink href="#home">Главная</NavLink>
                <NavLink href="#about">Обо мне</NavLink>
                <NavLink href="#stack">Технологии</NavLink>
                <NavLink href="#projects">Проекты</NavLink>
                <NavLink href="#services">Услуги</NavLink>
                <NavLink href="#contact">Контакты</NavLink>
                {/* <NavLink href="#rates">Отзывы</NavLink> */}
            </nav>
        </header>
    )
}