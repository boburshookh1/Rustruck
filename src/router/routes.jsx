import { Certeficat } from "../pages/certeficat/certeficat";
import Contacts from "../pages/Contacts/contacts";
import Search from "../pages/Search/search";
import Cart from "../pages/Cart/cart";
import Foto from "../pages/Foto/foto";
import Hamkor from "../pages/Hamkor/hamkor";
import Home from "../pages/Home/home";
import Information from "../pages/Information/information";
import Katolg from "../pages/Katolg/katolg";
import Kredit from "../pages/Kredit/kredit";
import MainNewsCard from "../pages/mainNewsCard/mainNewsCard";
import News from "../pages/News/news";
import Onac from "../pages/Onac/oNac";
import Reklama from "../pages/Reklama/reklama";
import Repair from "../pages/Repair/repair";
import Service from "../pages/Service/service";
import Vaqansiva from "../pages/vaqansiva/vaqansiva";
import Vido from "../pages/Video/vido";

export const router = [
    {
        id: 1,
        path: '/',
        element: <Home />,
    },
    {
        id: 2,
        path: '/xizmat-markazi',
        element: <Service />,
    },
    {
        id: 3,
        path: '/tamirlash-xizmati',
        element: <Repair />,
    },
    {
        id: 4,
        path: '/yangiliklar-markazi',
        element: <News />,
    },
    {
        id: 5,
        path: '/boglanish',
        element: <Contacts />,
    },
    {
        id: 6,
        path: '/mahsulotlar-katalogi',
        element: <Katolg />,
    },
    { id: 17, path: '/qidiruv', element: <Search /> },
    { id: 18, path: '/savat', element: <Cart /> },
    {
        id: 7,
        path: '/biz-haqimizda',
        element: <Onac />
    },
    {
        id: 8,
        path: '/mahsulotlar',
        element: <Information />
    },
    {
        id: 9,
        path: '/yangiliklar/batafsil',
        element: <MainNewsCard />
    },
    {
        id: 10,
        path: '/foto-galereya',
        element: <Foto />
    },
    {
        id: 11,
        path: '/videolar',
        element: <Vido />
    },
    {
        id: 12,
        path: '/reklama-materiallari',
        element: <Reklama />
    },
    {
        id: 13,
        path: '/hamkorliklar',
        element: <Hamkor />
    },
    {
        id: 14,
        path: '/sertifikatlarimiz',
        element: <Certeficat />
    },
    {
        id: 15,
        path: '/ish-orinlari',
        element: <Vaqansiva />
    },
    {
        id: 16,
        path: '/kredit-va-lizing',
        element: <Kredit />
    }
]
