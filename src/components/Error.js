import React from 'react';
import styled from '@emotion/styled';


const Error = ({mensaje}) => {
    return (  
        <MensajeError>{mensaje}</MensajeError>
    );
}

const MensajeError = styled.p`
    background-color: hsl(1, 85%, 65%);
    padding: 1rem;
    color: #FFF;
    font-size: 20px;
    text-transform: uppercase;
    text-align: center;
    border-radius: 5px;
`;

export default Error;