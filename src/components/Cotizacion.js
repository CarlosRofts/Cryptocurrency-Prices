import React from 'react';
import styled from '@emotion/styled';


const Cotizacion = ({resultado}) => {
    // Validación de objeto Vacio
    if(Object.keys(resultado).length === 0) return null; //key: devuelve un array de las propiedades names / output ['0', '1', '2'] similar a  entries,values 
    // console.log(resultado)
    return ( 
        <ResultadoDiv className="slide-left">
            <Precio> <span>Precio:</span> <span>{resultado.PRICE}</span> </Precio>
            <Info> Precio más alto del día:  <span> {resultado.HIGHDAY}</span> </Info>
            <Info>  Precio más bajo del día: <span>{resultado.LOWDAY}</span> </Info>
            <Info>  Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span> </Info>
            <Info>Última Actualización: <span>{resultado.LASTUPDATE}</span> </Info>
        </ResultadoDiv>
     );
}

// Styled Components
const ResultadoDiv = styled.div`
    color: #000000cf;
    background-color:white;
    text-align: center;
    border-radius: 10px; 
    padding: 50px; 

    @media (max-width:992px){ margin-top:50px; margin-left:0 !important; }
    p{ margin: .5em 0;}

    &.slide-left {
    -webkit-animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    -moz-animation : slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    /*
    * ----------------------------------------
    * animation ENTER slide-left 
    * ----------------------------------------
    */
    @-webkit-keyframes slide-left {
        0% {
            transform: translateX(100px);
                    opacity: 0;
            -webkit-transform :  translateX(100px);
            -moz-transform :  translateX(100px);
        }
        100% {
            transform: translateX(0px);
            -webkit-transform : translateX(0px);
            -moz-transform : translateX(0px);
            margin-left: -100px;
            opacity: 1;            
        }
    }
    
    @keyframes slide-left {
        0% {
            transform: translateX(100px);
            -webkit-transform: translateX(100px);
            -moz-transform: translateX(100px);
                    opacity: 0;
        }
        100% {
            transform: translateX(0px);
            -webkit-transform: translateX(0px);
            -moz-transform: translateX(0px);
            margin-left: -100px;
            opacity: 1;            
        }
    }
`;

const Info = styled.p`
    font-size: 1em;
    display:flex;
    justify-content: space-between;
    margin-top:3px;
    span {
        font-weight:bold;
        margin-left:30px;        
    }
`;
const Precio = styled.p`
    font-size: 30px;
    margin-bottom: 1.3em !important;
    display:flex;
    justify-content: space-between;
    span  {
        font-weight:bold;
    }
`
 
export default Cotizacion;