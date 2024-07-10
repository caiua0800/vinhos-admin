import React from "react";
import styled from "styled-components";


export default function Vinho() {

    return (
        <VinhoBox>
            <VinhoImageBox>
                <VinhoImage src="https://th.bing.com/th/id/OIP.PjHfEF7mccV1Pj4I26LS7wHaHa?rs=1&pid=ImgDetMain" alt="Imagem Vinho" />
            </VinhoImageBox>
            <VinhoName>
                VINHO NOME
            </VinhoName>
            <VinhoPrice>
                R$30,50 - R$37,00
            </VinhoPrice>
            <VinhoCountry>
                Brasil -RS
            </VinhoCountry>
            <VinhoBtns>
                <button>Saber mais</button>
            </VinhoBtns>
        </VinhoBox>
    )
}


const VinhoBox = styled.div`
    width: 400px;
    // height: 400px;
    border-radius: 8px;
    box-shadow: 2px 2px 3px rgba(0,0,0,1);
    background: linear-gradient(to right, #370617, #6a040f, #370617);
    padding: 20px 10px;
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
`;

const VinhoImageBox = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const VinhoImage = styled.img`
    width: 200px;
    height: 200px;
`;

const VinhoName = styled.h3`
    margin: 0;
    margin-top: 10px;
    color: white;
    font-size: 22px;
`;

const VinhoCountry = styled.div`
    color: rgba(255, 255, 255, 0.7);
`;

const VinhoPrice = styled.h4`
    margin: 0;
    color: white;
    font-size: 20px;
    font-weight: 100;
`;

const VinhoBtns = styled.div`
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: end;

    button{
        height: 30px;
        cursor: pointer;
        border: 2px solid rgba(0,0,0,0.5);;
        background: linear-gradient(to right, #9d0208, #9d0208);
    }
`;