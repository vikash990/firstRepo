import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import {NavLink,withRouter } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';      

import Text from './text.js';
import logoh from '../Images/html.jpg';
import logor from '../Images/react.png';
import logon from '../Images/nodejs.jpg';
import logom from '../Images/mongodb.png';
import logoml from '../Images/machine.jpg';
import logoc from '../Images/c.jpg';
import logoj from '../Images/java.png';
import logoa from '../Images/algorithm.jpg';
import logo1 from '../Images/coding1.jpg';
import logo2 from '../Images/coding2.jpg';
import logo3 from '../Images/coding3.jpg';
import logo4 from '../Images/coding4.jpg';
 

const ContentWrapper = styled('div')`
    min-height: 70vh;
    margin: 0 60px;
    @media(max-width: 768px) {
        margin: 0 5px;
    }
`;
const SlideWrapper = styled(Slide)`
    margin: 30px;
    height: 300px;
`;
const proprietes = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: true
}


const FirstWrapper =styled('div')`
    margin: 50px;
`
const CourseImageWrapper=styled('img')`
    border-radius: 10px;
    margin: 30px;
    @media(max-width: 767px) {
        margin: 5px;
    }
`
const HeadingWrapper=styled('h4')`
    font-weight: 600;
    @media(max-width: 767px){
        text-align: center;
    }
`
const ColWrapper = styled(Col)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ImageWrapper = styled('img')`
    max-height: 300px;
    border-radius: 8px;
    @media(max-width: 767px) {
        width: 100%;
    }
`;

const courses = [
    {
        link: '/web-development/',
        image: logoh,
    },
    {
        link: '/web-development/',
        image: logor,
    },
    {
        link: '/web-development/',
        image: logon,
    },
    {
        link: '/web-development/',
        image: logom,
    },
    {
        link: '/web-development/',
        image: logoml,
    },
    {
        link: '/web-development/',
        image: logoc,
    },
    {
        link: '/web-development/',
        image: logoj,
    },
    {
        link: '/web-development/',
        image: logoa,
    },
];

class Home extends React.Component{

    render(){
        return(
           <ContentWrapper>
               <Row>
                   <Col sm={6} xs={12}>
                        <FirstWrapper>
                            <Text >  Why Coding?</Text>
                            <h4>Enhance Your Coding Skills</h4>
                            <p>We are here to fill the gap between the students and their dreams.</p>
                            <p> Enroll with our online programs with our experts and give your career a lift</p>
                        </FirstWrapper>
                    </Col>
                    <Col sm={6} xs={12}>
                        <SlideWrapper {...proprietes}>
                            <ImageWrapper src ={logo1} alt="coding1"/>
                            <ImageWrapper src ={logo2} alt="coding2"/>
                            <ImageWrapper src ={logo3} alt="coding3"/>
                            <ImageWrapper src ={logo4} alt="coding4"/>
                        </SlideWrapper>
                    </Col>
                </Row>
                <HeadingWrapper>Our Courses</HeadingWrapper>
                <Row>
                    {courses.map(course => (
                            <ColWrapper xs={6} sm={3}>
                                <NavLink to={course.link} exact><a href={course.link}><CourseImageWrapper src={course.image}/></a></NavLink>
                            </ColWrapper>
                    ))}
                </Row>
            </ContentWrapper>

        );

    }

}
export default Home;