import React  from 'react';
import { AboutSection , AboutInfo , InfoTitle , InfoDir , InfoDesc , Span  } from './style.js'

const About = () => {
    return (
        <AboutSection>
            <div class="container">
                <AboutInfo>
                    <InfoTitle><Span>This is</Span> Me</InfoTitle>
                    <InfoDir> Road to senior JavaScript Developer & php laravel  </InfoDir>
                    <InfoDesc>
                    <InfoDesc>
                    What is ReactJS developer ?
                    </InfoDesc>
                    React (also known as React.js or ReactJS) is an open-source JavaScript library for building user interfaces.
                     It is maintained by Facebook and a community of individual developers and companies.

                    React can be used as a base in the development of
                     single-page or mobile applications. However,
                      React is only concerned with rendering data to the DOM, 
                       so creating React applications usually requires the use of
                        additional libraries for state management and routing. Redux and React Router
                    are respective examples of such libraries. 

              
                    </InfoDesc>
                </AboutInfo>
            </div>
        </AboutSection>
    )
}

export default About;
