import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { RiDiscussFill } from "react-icons/ri";
export const Sidebar=[
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Overview',
        path:'/overview',
        icon:<IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title:'Discussions',
        path:'/discussions',
        icon:<RiDiscussFill />,
        cName:'nav-text'
    },
    {
        title:'Known References',
        path:'/references',
        icon:<IoIcons.IoMdPeople />,
        cName:'nav-text'
    },
    {
        title:'Legal Terms',
        path:'/terms',
        icon:<FaIcons.FaEnvelopeOpenText />,
        cName:'nav-text'
    },
    {
        title:'Contact',
        path:'/contact',
        icon:<IoIcons.IoMdHelpCircle />,
        cName:'nav-text'
    }
]