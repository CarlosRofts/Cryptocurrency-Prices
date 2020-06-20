//# Custom Hooks
    //-La vanetaja es que se centraliza todo en un solo lugar
    //-Es una función similares a useEffect
    //-debe de tenersu propio state y debe retornar la función que modifica el state

import React , { Fragment , useState } from "react";
import styled from '@emotion/styled'  // npm i @emotion/core


//' Hook que contiene un select para que los usuarios pueden escoger el tipo de moneda.
    // syntax similar a Functional Components
const useMoneda = (label , stateInicial , opciones) => { 
      
    // State del custom Hook
    const [state,actualizarState] = useState(stateInicial)

    const Seleccionar  = () => ( //body
        <Fragment>
            <Label>{label}</Label>
            <Select 
                onChange={e => (actualizarState(e.target.value))}
                value={state}
                style={ state ? {opacity:1 }:null }
            >
                <option value="">seleccione</option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>
                        {opcion.nombre}
                    </option>
                ))}
            </Select>
        </Fragment>

    )

    // Return State, interfaz(fn del component) y fn que modifica el state
        // lo que retornamos depende de las necesidades del proj. y/o del componente
    return[state,Seleccionar,actualizarState]
}


// Styled Components
const Label = styled.label`
    color: #FFF;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 300;
    font-size: 1rem;
    margin: 1rem 0;
    display: block;

`;

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none; /* Quitamos la arrow */
    border-radius: 1px;
    border: none;
    font-size: 1.2rem;
    opacity:.7;
    transition : all .5s ease;

    &:hover , &:active , &:focus {
    outline: none;
    opacity:1;
    }
    
    option{
        background:hsl(262, 18%, 88%);
    }
`


export default useMoneda;

