import React from 'react';
import styled from "styled-components";


const TitleWrapper = styled('h1')`
    font-size: 30px;
    font-style: oblique;
    color: ${props => props.color};
`;



class CodeForFuture extends React.Component{

    render(){
        return(
            <div>
                <TitleWrapper color={this.props.color}>Coding</TitleWrapper>
                
            </div>
          );
        }
}

export default CodeForFuture;