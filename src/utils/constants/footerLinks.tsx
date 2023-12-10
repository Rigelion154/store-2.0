import React from 'react';
import { FaTelegram } from 'react-icons/fa6';
import { BsDiscord } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

export const footerLinks = [
  {
    id: 1,
    name: 'Telegram',
    path: 'https://t.me/Rigelion154',
    icon: <FaTelegram size={30} />,
  },
  {
    id: 21,
    name: 'Discord',
    path: 'https://discordapp.com/users/580826430804459533/',
    icon: <BsDiscord size={30} />,
  },
  {
    id: 3,
    name: 'Github',
    path: 'https://github.com/Rigelion154/',
    icon: <AiFillGithub size={30} />,
  },
];
