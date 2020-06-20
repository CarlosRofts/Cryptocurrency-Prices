import React, { useState, useEffect } from 'react';
import './App.css';
import styled from '@emotion/styled'  // npm i @emotion/core
import Formulario from './components/Formulario'
import Cotizacion from './components/Cotizacion'
import Spinner from './components/Spinner'
import SocialLinks from './components/SocialLinks'
import axios from 'axios'
import listener from './helper/listener'

function App() {
  let x = listener().width
  // State para la peticion a la API
  const [moneda, guardarMoneda] = useState('') //state moneda seleccionada
  const [criptomoneda, guardarCriptomoneda] = useState('') //state criptoMoneda seleccionada
  const [resultado, guardarResultado] = useState({}) //state API resultado de la cotización (url)
  const [cargando, guardarCargando] = useState(false) //spiner
  const [trigger, setTrigger] = useState(false) //spiner

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      // evitar la petición si no hay datos (la otra forma es con una función mirar elproj. CLima)
      if (moneda === '') return
      // Consultar API para convertir la moneda seleccionada.
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
      const resultado = await axios.get(url)
      // console.log(resultado)
      // console.log(resultado.data.DISPLAY[criptomoneda][moneda]) //debido a que la key cambia dependiendo la mneda accedemos a los attr. dinamicamente.


      guardarCargando(true) //mostrar Spinner
      setTrigger(true)
      setTimeout(() => {
        guardarCargando(false) //ocultamos el spinner
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]) //mandmos la url al state para cotizar 
      }, 3000)
    }
    cotizarCriptomoneda()
  }, [moneda, criptomoneda])

  //Conditional components (spinner o resultado) 
  const conditionalComponent = (cargando) ? <Spinner /> : <Cotizacion resultado={resultado} />

  return (
    <Contenedor >
      <SocialLinks />
      <div>
        <Heading>
          Cotiza Monedas
        </Heading>

        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCriptomoneda={guardarCriptomoneda}
        />
      </div>
      {<div
        id="wrapper"
        style={x >= 992 && trigger ? { animation: "move .2s ease-in forwards " } : null }//Hack para corregir el problema de firefox (no limpia la animacion)
      >
        {conditionalComponent}

      </div>
      }
    </Contenedor>
  );
}

// Styled Components Syntax (similar to SASS)
const Contenedor = styled.div`  
  min-height: 100vh; 
  margin: 0 ;  
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;

  @media (min-width:992px){ /* desktop */
    
    @keyframes move {  /* disable keyframes on animation on mobiles */
      from { margin-left:0px ; }
      to { margin-left:200px ; }
    }
    @-webkit-keyframes move {  /* disable keyframes on animation on mobiles */
      from { margin-left:0px ; }
      to { margin-left:200px; }}

    flex-direction:row;
  
  }
`;


const Heading = styled.h1`
  color: #fff;
  text-align:left;
  font-weight:100;
  font-size: 50px;
  margin-bottom:50px;
  margin-top: 0px;
    &::after{
      content: '';
      width:75px;
      height:2px;
      background-color: hsl(167, 98%, 39%);
      display:block;
    }
`;

export default App;
