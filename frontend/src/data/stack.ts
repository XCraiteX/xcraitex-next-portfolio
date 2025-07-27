export interface StackItem {
  img: string;
  title: string;
  description: string;
  imgClass?: string;
}

export const stackData: StackItem[] = [
  {
    img: "/icons/next.webp",
    title: "NEXT",
    description: "Фреймворк созданный для React.js для создания продвинутых веб-приложений"
  },
  {
    img: "/icons/react.webp",
    title: "REACT",
    description: "Библиотека, позволяющая строить динамические интерфейсы, используя компоненты и виртуальный DOM для оптимизации"
  },
  {
    img: "/icons/tailwind.webp",
    title: "TAILWIND",
    description: "CSS-фреймворк, который использует утилитарные классы для быстрой и гибкой стилизации HTML-элементов"
  },
  {
    img: "/icons/typescript.webp",
    title: "TYPESCRIPT",
    description: "Язык, улучшающий JavaScript, добавляет типы для оптимизации и меньшего количества ошибок"
  },
  {
    img: "/icons/sass.webp",
    title: "SCSS",
    description: "Продвинутый CSS с переменными и функциями, упрощающий и ускоряющий написание продвинутых стилей"
  },
  {
    img: "/icons/motion.webp",
    title: "MOTION",
    description: "Удобная библиотека для создания анимированных компонентов в React‑приложениях",
    imgClass: "p-1 rounded-xl"
  },
  {
    img: "/icons/figma.webp",
    title: "FIGMA",
    description: "Удобная платформа для быстрого создания макетов проектов любых масштабов"
  },
  {
    img: "/icons/fastapi.webp",
    title: "FASTAPI",
    description: "Самый быстрый Python-фреймворк для создания API, удобен в расширении и валидации данных"
  },
  {
    img: "/icons/docker.webp",
    title: "DOCKER",
    description: "Контейнеризация для переносимости и надежности приложений. Ускоряет развертывание, стандартизирует среду, снижает затраты"
  },
  {
    img: "/icons/postgres.webp",
    title: "POSTGRES",
    description: "Быстрая реляционная СУБД с поддержкой сложных типов данных и расширенными возможностями"
  },
  {
    img: "/icons/redis.webp",
    title: "REDIS",
    description: "Быстрая база данных, хранящая данные в кэше и обеспечивающая быстрый доступ к последним данным"
  },
  {
    img: "/icons/nginx.png",
    title: "NGINX",
    description: "Быстрый веб-сервер с балансированием нагрузки и обратным проксированием"
  }
]; 