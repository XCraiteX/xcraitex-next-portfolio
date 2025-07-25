import ArrowButton from "@/components/global/arrow-button";
import Header from "@/components/global/header";
import SectionCard from "@/components/ui/section-card";
import TechCard from "@/components/ui/tech-card";

export default function Home() {
  return (
    <>
    <Header/>
    <main className="h-screen w-screen snap-x snap-mandatory flex overflow-x-hidden scroll-smooth" id="main-page-section">

       {/* HOME */}
       <SectionCard id="home">
          <div className="w-[80%] flex flex-col gap-8">
            <div className="flex flex-col gap-5">   
              <h1 className="text-7xl">Дмитрий Крайтекс</h1>
              <h2 className="text-4xl text-white/80">Fullstack Разработчик</h2>
            </div>
            <ArrowButton>Узнать больше</ArrowButton>
          </div>
        </SectionCard>

        {/* ABOUT */}

        {/* STACK */}
        <SectionCard id="stack">
          <div className="w-[80%] flex flex-wrap">
            <TechCard img="/icons/next.webp" title="NEXT" description="Фреймворк созданный для React.js для создания продвинутых веб-приложений (фронтенд)"/>
            <TechCard img="/icons/react.webp" title="REACT" description="Библиотека, которая позволяет строить динамические UI, используя компоненты и виртуальный DOM для оптимизации обновления интерфейса (фронтенд)"/>
            <TechCard img="/icons/tailwind.webp" title="TAILWIND" description="CSS-фреймворк, который использует утилитарные классы для быстрой и гибкой стилизации HTML-элементов (фронтенд)"/>
            <TechCard img="/icons/typescript.webp" title="TYPESCRIPT" description="Язык, улучшающий JavaScript, добавляет типы для оптимизации и меньшего количества ошибок (фронтенд)"/>
            <TechCard img="/icons/sass.webp" title="SCSS" description="Продвинутый CSS с переменными и функциями, упрощающий и ускоряющий написание продвинутых стилей (фронтенд)"/>
            <TechCard img="/icons/fastapi.webp" title="FASTAPI" description="Самый быстрый Python-фреймворк для создания API, удобен в расширении и валидации данных. (бэкенд)"/>
          </div>
        </SectionCard>

        {/* PROJECTS */}

      </main>
    </>
  );
}
