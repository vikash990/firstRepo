import React from 'react';
import styled from "styled-components";
import {NavLink } from 'react-router-dom';

import CodeForFuture from './codeforfuture';
import logof from '../Images/facebook.png';
import logot from '../Images/twitter.png';
import logol from '../Images/linkdin.png';
import logoi from '../Images/instagram.jpg';



const NavLinkWrapper = styled(NavLink)`
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    justify-content: center;
    color:black;

    &:hover{
      color:white;
    }
`;

const RowWrapper = styled('div')`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
`;
const RowsWrapper = styled('div')`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
`;
const HeadWrapper = styled('h1')`
    color: white;
    font-size: 40px;
    font-style: initial;

`;

const FooterWrapper = styled('div')`
   
    background: rgba(60, 60, 60,0.6);
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
}
`;
const InRowWrapper = styled('div')`
    display: flex;
    flex-direction:row;
    justify-content: space-around;
`;

const navItems = [
    
      {
        route: '/web-development',
        label:'Web Development'
      },
      {
        route: '/machine-learning',
        label:'Machine Learning'
      },
      {
        route: '/c++',
        label:'C++'
      },
      {
        route: '/java',
        label:'Java'
      },
      {
        route: '/D-S',
        label:'Data Structure'
      },
      {
        route: '/algorithm',
        label:'Algorithm'
      }
];

const footerItems = [
    
    {
      route: '/success-stories',
      label:'Succcess Stories'
    },
    {
      route: '/terms',
      label:'Terms and Condition'
    },
    {
      route: '/blogs',
      label:'Blogs'
    },
    
];


class Footer extends React.Component{

    render(){
        return(
           <FooterWrapper>
               <CodeForFuture color='white'/>
                    <p>Build career for yourself</p>
                <RowsWrapper>
                    <div>
                        <HeadWrapper> Technology </HeadWrapper>
                            {navItems.map((item,index) => (
                                <NavLinkWrapper key={index} to={item.route} exact >{item.label}</NavLinkWrapper>
                            ))}
                    </div>
                    <div>
                    <HeadWrapper> Contact </HeadWrapper>
                            <p>9117018454</p>
                            <p>vikashadubey@gmail.com</p>
                            <p>G/M 35-A Bokaro Thermal,Bokaro,Jharkhand</p>
                    </div>
                    <div>
                    <HeadWrapper> Coding </HeadWrapper>
                            {footerItems.map((item,index) => (
                                <NavLinkWrapper key={index} to={item.route} exact >{item.label}</NavLinkWrapper>
                            ))}
                    </div>
                </RowsWrapper>
                    <RowWrapper>
                    <div>
                        <p>Vikash Dubey.</p>
                    </div>
                    
                    <InRowWrapper> 
                            <a href="https://www.facebook.com/vikashdubeycodingclub" target="_blank"><img src={logof}/></a>
                            <a href="https://twitter.com/VikashD39681388" target="_blank"><img src={logot}/></a>
                            <a href="https://www.linkedin.com/in/vikash-dubey-1b7914171/" target="_blank"><img src={logol}/></a>
                            <a href="https://www.instagram.com/vikash__dubey__/" target="_blank"><img src={logoi}/></a>
                    </InRowWrapper>
                 </RowWrapper>
            </FooterWrapper>
           

        );

    }

}
export default Footer;