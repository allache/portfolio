import React  from 'react';

import { HomeSection , HomeInformation , HomeTitle , HomeInfo , HomeDesc , Span , HomeBtn } from './style.js'

const Home = () => {
    return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                <HomeInfo>Open this website on pc mode for better view ty </HomeInfo>
                    <HomeTitle>Allache Abdelmalek</HomeTitle>
                    <HomeInfo >Road to junior/sinor Developer</HomeInfo>
                    <HomeDesc>
                        Iam a person who
                         was a victim of the old education program
                         But I am still sticking to the coding path and that is why
                       I am learning other languagessuch
                        <Span>Nodejs</Span> for backend 
                       and for frontend is <Span> React js</Span>

                         
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}

export default Home;
