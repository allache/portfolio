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
                        Iam a person who just 
                        It was a victim of the ancient education program
                       But I am still sticking to the programming path and that is why 
                       I am learning other languages such
                        <Span> php laravel nodejs</Span> for backend 
                       and for frontend is <Span> react js</Span>

                         
                    </HomeDesc>
                    <HomeBtn>Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}

export default Home;
