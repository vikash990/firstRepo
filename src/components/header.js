import React from 'react';
import {NavLink,withRouter } from 'react-router-dom';
import styled from "styled-components";
import PropTypes from 'prop-types';

import logo from './future.png';

const NavWrapper = styled('div')`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: rgba(60, 60, 60,0.6);
            

    `;
const NavLinkWrapper= styled(NavLink)`
    
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      justify-content: center;
      color:black

      &:hover {
        
        color:white;
        


      }
    
`;
const LeftWrapper=styled('div')`

        display: flex;
        flex-direction: row;
        width: 400px;
        justify-content: space-between;
        padding-left: 50px;
    

`
const RightWrapper=styled('div')`

      display:flex;
      flex-direction:row;
      justify-content:flex-end;
      margin-right:60px;
      margin-top:20px;
      border-radius:3px;

`

const ChildNavWrapper= styled('div')`
      {
        display: none;
        position: absolute;
        background-color:rgba(60, 60, 60,0.6);
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.4);
        z-index: 1;
        margin-top:22px;
      }

      & .nav {
         float: none;
         color: black;
         padding: 12px 16px;
         text-decoration: none;
         display: block;
         text-align: left;
         
    }

    & .nav:hover {
         color:white

    }

     
    `
const LogoWrapper = styled('img')`
        height: 47px;
        margin: 10px 0;
        border-radius: 10px;
`;

const MainWrapper=styled('div')`
        position: relative;
        display: inline-block;  
        margin-top:25px; 
    
        &:hover .main{
                display:block;
                color:white;
              }

`
const ButtonWrapper=styled('button')`
    
    height:30px;
    width:50px;
    border-radius:5px;
    color:black;
       
`


class Header extends React.Component{

    constructor(props) {
        super(props)
       this.state={
        token:null
    }
    }

    static propTypes = {
        token: PropTypes.shape({})
    }

    static defaultProps = {
        token: localStorage.usertoken,
    }

    componentDidUpdate(prevProps) {
        if(this.props.token !== prevProps.token) {
            this.setState({ token:localStorage.usertoken })
        }
    }
    

    

    render(){
        const token = localStorage.usertoken;
       
        return(
            <NavWrapper fixed="top">
              <LeftWrapper>
                   <NavLinkWrapper to ="/" exact ><a href="/"><LogoWrapper src={logo}/></a></NavLinkWrapper>
                      <MainWrapper>
                          <NavLinkWrapper to ="/" exact >About</NavLinkWrapper>
                          <ChildNavWrapper  className="main">
                             <NavLinkWrapper className="nav" to ="/about-us" exact >About-Us</NavLinkWrapper>
                             <NavLinkWrapper className="nav"  to ="/our-team" exact >Our Team</NavLinkWrapper>
                           
                          </ChildNavWrapper>
                      </MainWrapper>
                      <MainWrapper>
                          <NavLinkWrapper to ="/" exact >Courses</NavLinkWrapper>
                          <ChildNavWrapper  className="main">
                             <NavLinkWrapper className="nav" to ="/web-development" exact >Web Development</NavLinkWrapper>
                             <NavLinkWrapper className="nav"  to ="/machine-learning" exact >Machine Learning</NavLinkWrapper>
                             <NavLinkWrapper className="nav" to ="/c++" exact >C++</NavLinkWrapper>
                             <NavLinkWrapper className="nav"  to ="/java" exact >Java</NavLinkWrapper>
                             <NavLinkWrapper className="nav" to ="/D-S" exact >Data Structure</NavLinkWrapper>
                             <NavLinkWrapper className="nav"  to ="/algorithm" exact >Algorithm</NavLinkWrapper>
                         </ChildNavWrapper>
                      </MainWrapper>
                      <MainWrapper>
                          <NavLinkWrapper to ="/apply" exact >Apply</NavLinkWrapper>
                      </MainWrapper>
             </LeftWrapper> 
             <RightWrapper>   
                       {token ?
                        <div>
                            <ButtonWrapper onClick={() => { this.props.history.push('/logout') }}> Logout</ButtonWrapper>
                            <ButtonWrapper  onClick={() => { this.props.history.push('/profile') }}>Profile</ButtonWrapper>
                        </div>
                       : <ButtonWrapper label='LOGIN'  onClick={() => { this.props.history.push('/login') }}> Login</ButtonWrapper>
                       }
                    
                
             </RightWrapper>
            </NavWrapper>
            
           
        );

    }

}
export default withRouter(Header);