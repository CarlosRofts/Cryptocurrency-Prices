import React from 'react'
// import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle  } from '@fortawesome/free-solid-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'    
import styled from '@emotion/styled'  // npm i @emotion/core

// import {Row} from 'react-bootstrap';       

const portfolio = <FontAwesomeIcon icon={faUserCircle} className="social "/>
const gitHub2 = <FontAwesomeIcon icon={faGithub} className="social " />

const SocialLinks = () => {
    return (
      <Row  style={{ position:"fixed",right:30,bottom:0,zIndex:100}}>
          <a target="_blank" rel="noopener noreferrer" href="http://carlosfuentes.ns1.epizy.com/">{portfolio}</a>
          <a target="_blank" rel="noopener noreferrer"  href="https://github.com/CarlosRofts/Cryptocurrency-Prices">{gitHub2}</a>
      </Row>      
      );
}

const Row = styled.div`  
    display:flex;
    a{ color: hsl(281, 37%, 20%) !important; margin: 0 5px  ;}
    background-color:white;
    border-radius:40px;
    padding:10px;
    font-size:3em;
    margin:10px 0;
    transform: translate(300px);
    animation: enter .4s cubic-bezier(.54,.95,.66,1.39) .3s forwards;
    @keyframes enter { to{transform: translate(0px); } }
    .social{
        border-radius: 50%;
        &:hover{
        border: 2.5px solid Aqua;
        transition: all .2s linear;
        color: hsl(167,98%,39%);
    }}
`;
export default SocialLinks;