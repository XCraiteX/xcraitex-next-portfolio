import { serviceScheme } from "@/types/service";

import { SiPaperlessngx } from "react-icons/si";
import { GiPapers } from "react-icons/gi";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { MdDeviceHub } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";


export const servicesData: serviceScheme[] = [
    {
        title: "Лендинг",
        description: "Маленькие сайты - визитки",
        price_byn: "200 BYN",
        price_rub: "6000 ₽",
        icon: <SiPaperlessngx size={50}/>,
        popular: true
    },
    {
        title: "Многостраничник",
        description: "Проект средней сложности на много страниц",
        price_byn: "500 BYN",
        price_rub: "15000 ₽",
        icon: <GiPapers size={50}/>,
        popular: true
    },
    {
        title: "Простой Магазин",
        description: "Небольшой магазин с заявками",
        price_byn: "1000 BYN",
        price_rub: "30000 ₽",
        icon: <RiShoppingBag4Fill size={50}/>,
        popular: true
    },
    {
        title: "Веб-Приложение",
        description: "Сложные приложения с API",
        price_byn: "1600 BYN",
        price_rub: "48000 ₽",
        icon: <MdDeviceHub size={50}/>,
        popular: false
    },
    {
        title: "Telegram Бот",
        description: "Любой бот, которого вы пожелаете",
        price_byn: "100 BYN",
        price_rub: "3000 ₽",
        icon: <FaTelegramPlane size={50}/>,
        popular: true
    },
    {
        title: "Discord Бот",
        description: "Модерация, автоматизация и т д",
        price_byn: "150 BYN",
        price_rub: "4500 ₽",
        icon: <FaDiscord size={50}/>,
        popular: false
    },
    {
        title: "Администрирование",
        description: "Обслуживание серверов и проектов",
        price_byn: "60 BYN",
        price_rub: "1500 ₽",
        icon: <FaServer size={50}/>,
        popular: false
    }
]