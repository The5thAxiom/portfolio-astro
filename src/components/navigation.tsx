import React from 'react';
import './navigation.css';

type page = {
    title: string;
    link: string;
};

export const pages: page[] = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'About Me',
        link: '/about'
    },
    {
        title: 'Experience\n&&\nEducation',
        link: '/education'
    },
    {
        title: 'My\nProjects',
        link: '/projects'
    },
    {
        title: 'Contact Me',
        link: '/contact'
    }
];

export default function Navigation() {
    return (
        <nav id='navigation'>
            {pages.map((page, index) => (
                <a
                    key={index}
                    href={page.link}
                    className='navigation-link other-page'
                    // className={({ isActive }) =>
                    //     'navigation-link' +
                    //     (isActive ? ' current-page' : ' other-page')
                    // }
                >
                    {page.title}
                </a>
            ))}
        </nav>
    );
}

