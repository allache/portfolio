import React  from 'react';

import { HomeSection , HomeInformation , HomeTitle , HomeInfo , HomeDesc , Span , HomeBtn } from './style.js'

const Home = () => {
    return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Klalib Sohaib</HomeTitle>
                    <HomeInfo >Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Span>Odoo developer</Span> and <Span>Front-End Developer</Span> and <Span>UX Designer</Span> creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}

export default Home;
