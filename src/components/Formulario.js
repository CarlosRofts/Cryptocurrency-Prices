import React ,{useEffect , useState} from 'react'
import styled from '@emotion/styled'  // npm i @emotion/core
import Error from './Error'
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'
import axios  from 'axios'


const Formulario = ({guardarCriptomoneda , guardarMoneda}) => {

    // state del del listado de criptomonedas
    const [listacripto , guardarCriptomonedas ] = useState([])
    const [error,guardarError] = useState(false)

    // Array de monedas disponibles para su conversión (SELECT)
    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' }
    ];

    // State useMoneda CustomHook
    const [moneda,SelectMoneda]  = useMoneda('Elige tu Moneda' , '' , MONEDAS );

    // State useCriptomoneda CustomHook
    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda','',listacripto)

    useEffect(() => {
        const consultarAPI = async () => {
            const url =  'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'  
            const resultado = await axios.get(url) //con axios hacemos un await 
            // console.log(resultado.data.Data)
            guardarCriptomonedas(resultado.data.Data)
        }
        consultarAPI()
    }, [])

    // onSubmit fn
    const cotizarMoneda = e => {
        e.preventDefault()
        // Validar cmpos vacios
        if(moneda === '' || criptomoneda === ''){
            guardarError(true)
            return
        }
        // pasar los datos al comp. principal (app.js)
        guardarError(false)
        guardarMoneda(moneda)
        guardarCriptomoneda(criptomoneda)
    }

    return ( 
        <form onSubmit={cotizarMoneda}>

            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}
            <SelectMoneda/>
            <SelectCripto/>

            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
     );
}

// Styled Component
const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: hsl(167, 98%, 39%);
    border: none;
    width: 100%;
    border-radius: 2px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: Aqua;  
        cursor:pointer;
    }
    &:active , &:focus {
        outline: none;

    }
`


export default Formulario;