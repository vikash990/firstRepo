import React from 'react';
import jwt_decode from 'jwt-decode';

class Profile extends React.Component {
   
   constructor() {
     super()
     this.state={
         first_name:'',
         email:''
     }

   }

componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
        first_name:decoded.first_name,
        email:decoded.email
    })

}

render() {
    return (
        <div>
         
            <h3>Hiii {this.state.first_name}</h3>
            <p>your email id is {this.state.email}</p>


        </div>
    )
}

}

export default Profile