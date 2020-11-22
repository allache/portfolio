import React  from 'react';
import { SocialMedia , Social , Icon  , SocialDesc , Span , SpanInfo} from './style.js'

import axios from 'axios'

class SocailMedia extends React.Component {

    state = {
        social: []
    }

    componentDidMount () {
        axios.get('js/data.json')
        .then( res => 
            { this.setState({ social : res.data.social })
        })
    }

    render() {

        const {social } = this.state 

        const socialList = social.map( (socialItem) => {
            return (
                <Social 
                grid={{
                    gutter:16,
                    xs: '4',
                    sm: '4',
                    md: '1',
                    lg: '9',
                    xl: '3',
                    xxl: '3',
                  }}
                 item={socialItem.id} key={socialItem.id}>
                    <Icon className={socialItem.icon}></Icon>
                    <SocialDesc>
                        <Span>{socialItem.title}</Span>
                        <SpanInfo>{socialItem.body}</SpanInfo>
                        <Span>{socialItem.name}</Span>
                    </SocialDesc>
                </Social>
            )
        } )

        return (
            <SocialMedia>
                
               {socialList}
                
            </SocialMedia>
        )
    }
}

export default SocailMedia;
