
import {greetings, about_txt} from '../assets/text/about'

import React from 'react';
import { Virtuoso } from 'react-virtuoso';

import './About.css'

const About = () => {
    return (
        <div className="about_content">
        <h1>👋 {greetings}</h1>
        {
            about_txt
        }</div>
    );
}

export default About;
