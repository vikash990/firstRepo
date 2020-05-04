import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import styled from 'styled-components';


import Header from './components/header.js';
import Home from './components/home.js';
import Login from './components/login.js';
import Apply from './components/apply.js';
import AboutUs from './components/about-us.js';
import OurTeam from './components/our-team.js';
import WebDevelopment from './components/web-development.js';
import MachineLearning from './components/machine-learning.js';
import CPlusPlus from './components/c++.js';
import Javaa from './components/java.js';
import DataStructure from './components/data-structure.js';
import Algorithm from './components/algorithm.js';
import Footer from './components/footer.js';
import Blogs from './components/blogs.js';
import Terms from './components/terms';
import SuccessStories from './components/success-stories.js';
import Profile from './components/profile.js';
import Logout from './components/logout.js';
 



const routeItems = [
  {
    path: '/',
    component: Home
},
 
  
  {
      path: '/apply',
      component: Apply
  },
  {
    path: '/login',
    component:Login
},
{
  path: '/about-us',
  component:AboutUs
},
{
  path: '/our-team',
  component:OurTeam
},
{
  path: '/web-development',
  component:WebDevelopment
},
{
  path: '/machine-learning',
  component:MachineLearning
},
{
  path: '/c++',
  component:CPlusPlus
},
{
  path: '/java',
  component:Javaa
},
{
  path: '/D-S',
  component:DataStructure
},
{
  path: '/algorithm',
  component:Algorithm
},
{
  path: '/success-stories',
  component:SuccessStories
},
{
  path: '/terms',
  component:Terms
},
{
  path: '/blogs',
  component:Blogs
},
{
  path: '/profile',
  component:Profile
},
{
  path: '/logout',
  component:Logout
},

];


class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="App">
          <Header />
          
           {routeItems.map((item,index) => (
             <Route key={index} path={item.path} exact strict component={item.component}/>


            ))

           }
           <Footer/>
        </div>
      </Router>
      );
  }
}

export default App; 