import React from 'react';
import OutboundLink from './outboundLink';
import { GithubIcon, ExplorerIcon } from '../components/icons';

type project = {
    name: string;
    about: React.Element;
    githubLink: string;
    directLink: string | null;
};

const projects: project[] = [
    {
        name: 'Linux Club Website',
        about: (
            <>
                A React.js site to showcase{' '}
                <OutboundLink to='https://github.com/lugvitc'>
                    VIT Chennai's Linux Club
                </OutboundLink>
                , made by me and{' '}
                <OutboundLink to='https://github.com/3V3RYONE'>
                    @3V3YONE
                </OutboundLink>
            </>
        ),
        githubLink: 'https://github.com/lugvitc/lugvitc.github.io',
        directLink: 'https://lugvitc.github.io'
    },
    {
        name: 'Cookbook',
        about: (
            <>
                A typescript React frontend with a flask REST api, a WIP site
                for keeping track of the stuff I like to cook!
            </>
        ),
        githubLink: 'https://github.com/The5thAxiom/cookbook',
        directLink: 'https://cookbook-demo-the5thaxiom.herokuapp.com'
    },
    {
        name: 'Samazon',
        about: (
            <>
                HTML, CSS, Javascript and PHP a (still WIP) simple mock
                e-commerce site made like they used to in the good old days.
                Samazon, we find what you want and give it to you!'
            </>
        ),
        githubLink: 'https://github.com/The5thAxiom/samazon',
        directLink: 'https://samazon-demo-the5thaxiom.herokuapp.com/'
    },
    {
        name: 'VITC Professors Web Scraper',
        about: (
            <>
                A web scraper to get information about our faculty at VIT
                Chennai. Made for{' '}
                <OutboundLink to='https://lugvitc.github.io/#/events#adrenaline'>
                    Adrenaline/FOSS Day
                </OutboundLink>
                .
            </>
        ),
        githubLink: 'https://github.com/The5thAxiom/vitc-professor-scraper',
        directLink: null
    },
    {
        name: 'jsGames',
        about: <>Simple games made in js for fun</>,
        githubLink: 'https://github.com/The5thAxiom/jsGames',
        directLink: null
    }
];

export default function Projects() {
    return (
        <>
            {projects.map((project: project, index: number) => (
                <section id={project.name}>
                    <h2>
                        {project.name}{' '}
                        <OutboundLink
                            className='project-icon-link'
                            to={project.githubLink}
                        >
                            {GithubIcon}
                        </OutboundLink>{' '}
                        {project.directLink && (
                            <OutboundLink
                                to={project.directLink}
                                className='project-icon-link'
                            >
                                {ExplorerIcon}
                            </OutboundLink>
                        )}
                    </h2>
                    <p>{project.about}</p>
                    {index !== projects.length - 1 && <hr />}
                </section>
            ))}
        </>
    );
}
