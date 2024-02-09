import React, { useState } from 'react';
import styled from 'styled-components';
import GrauIcon from '../../../images/color/grau.png';
import SilberIcon from '../../../images/color/silber.png';

const Title = styled.div`
  color: #696984;
  font-size: 26px;
`;

const ColorWrapper = styled.div`
    display: flex;
    gap: 8%;
    padding: 30px;
    padding-left: 5%;
`;

const Selection = styled.div`
    cursor: pointer;
`;

function Color() {
    const [color, setColor] = useState(0);


  return (
    <>
        <Title>Schienenfarbe</Title>
        <hr></hr>
        <ColorWrapper>
            <Selection>
                <div onClick={()=>setColor(0)}>
                <img style={{borderRadius: "50%", overflow: "hidden", border: color === 0 ? "3px solid #f59f4c": "none"}} 
                    src={GrauIcon} 
                    height='40px' width='40px' 
                    alt='silber color icon'/>
                </div>
                <div style={{fontWeight:  color === 0 ? "bold": "normal", maxWidth:"130px"}}>Grau (mit Glimmer Effekt)</div>
            </Selection>
            <Selection>
                <div onClick={()=>setColor(1)}>
                <img style={{borderRadius: "50%", overflow: "hidden", border: color === 1 ? "3px solid #f59f4c": "none"}} 
                    src={SilberIcon} 
                    height='40px' width='40px' 
                    alt='silber color icon'/>
                </div>
                <div style={{fontWeight:  color === 1 ? "bold": "normal", maxWidth:"130px"}}>Silber E6/EV1 Eloxal</div>
            </Selection>
        </ColorWrapper>
        <div style={{paddingLeft: "30px", paddingRight: "30px", paddingBottom: "10px", color: "#696984"}}>
            Bitte beachten Sie, dass es aus drucktechnischen Gründen zu Farbabweichungen gegenüber der realen Farbe kommen kann.
            Beachten Sie, dass wir aufgrund verschiedener Herstellerverfahren der Pulverlieferanten keine Haftung bei Farbabweichungen zur ­Farbkarte
            übernehmen können. Zur Beurteilung des dekorativen Aussehens ist für Sichtflächen ein Betrachtungsabstand von 3 m, senkrecht zur
            Oberfläche, bei diffusem Tageslicht einzuhalten.
        </div>
    </>
  )
}

export default Color