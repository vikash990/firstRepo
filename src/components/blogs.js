import React from 'react';
import styled from 'styled-components';

import logo from './future.jpg';

const ContentWrapper = styled('div')`
    min-height: 70vh;
`;

const PopupWrapper = styled('div')`
    margin: 100px 400px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 50px;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }  
        
`
const HeadWrapper = styled('div')`
      display: flex;
      flex-direction: row-reverse;
`
const IWrapper = styled('i')`
    &:hover {
        cursor: pointer;
    }
`
const BodyWrapper = styled('div')`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px;
        padding-bottom: 30px;
`
const ImageWrapper = styled('img')`
    border-radius: 10px;
`



class Blogs extends React.Component{

    render(){
        return(

           <ContentWrapper>
              <PopupWrapper>
                    <HeadWrapper>
                        <IWrapper className="fa fa-close" onClick={() => { this.props.history.push('/') }}></IWrapper>
                    </HeadWrapper>
                    <BodyWrapper>
                        <ImageWrapper src={logo}/>
                        <h3>Patience!</h3>
                        <p>Thankyou for your visit.</p>
                        <p>We will get back to you with more information.</p>
                    </BodyWrapper>
            </PopupWrapper>
           </ContentWrapper>

        );

    }

}
export default Blogs;