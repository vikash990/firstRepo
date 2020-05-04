import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled('button')`
    background: ${props => props.bgColor};
    
`;


const Button = ({ label, btnColor, onClick }) => (
   

        <ButtonWrapper bgColor={btnColor} onClick={onClick}>
            {label}
        </ButtonWrapper>
    
);

export default Button;