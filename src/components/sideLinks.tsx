import React from 'react';
import OutboundLink from './outboundLink';
import './sidelinks.css';
import {
    GithubIcon,
    BlogIcon,
    LinkedinIcon,
    InstagramIcon
} from '../components/icons';

type socialLink = { name: string; link: string; icon?: any };
export const socialLinks: socialLink[] = [
    {
        name: 'Github',
        link: 'https://github.com/The5thAxiom',
        icon: GithubIcon
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/samridh-anand-paatni-57a045215/',
        icon: LinkedinIcon
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/samridhpaatni/',
        icon: InstagramIcon
    },
    {
        name: 'Blog',
        link: 'https://blog.samridh.live',
        icon: BlogIcon
    }
];

export default function SideLinks() {
    return (
        <nav id='sidelinks'>
            {socialLinks.map((link, index) => (
                <OutboundLink
                    className='sidelinks-circle'
                    key={index}
                    to={link.link}
                >
                    {link.icon}
                </OutboundLink>
            ))}
        </nav>
    );
}

