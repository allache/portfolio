import React  from 'react';
import { AboutSection , AboutInfo , InfoTitle , InfoDir , InfoDesc , Span  } from './style.js'

const About = () => {
    return (
        <AboutSection>
            <div class="container">
                <AboutInfo>
                    <InfoTitle><Span>This is</Span> Me</InfoTitle>
                    <InfoDir> Odoo Developer</InfoDir>
                    <InfoDesc>
                    <InfoDesc>
                    What is the Odoo ?
                    </InfoDesc>
                     Odoo est le programme de gestion d’entreprise le plus évolutif et le plus installé au monde
                     grâce à ses applications répondant à tous les besoins d’une entreprise,
                      de la gestion de la relation client à la création de sites web et d’e-commerce,
                       en passant par la production, la gestion d’inventaire, la comptabilité, l’ERP etc.,
                        le tout parfaitement intégré. C’est la première fois qu’un éditeur de logiciels parvient à atteindre
                         un tel niveau de fonctionnalités..
                    </InfoDesc>
                </AboutInfo>
            </div>
        </AboutSection>
    )
}

export default About;
