import React from "react";
import styled from "styled-components";
import Vinho from "./Vinho";

export default function Home() {

    return (
        <HomeComponent>
            <HomeContent>

                <h1>SOFTWARE DE VINHOS</h1>

                <VinhosContainer>
                    <ComponenteInicial>
                        <h2>Vinhos Cadastrados</h2>
                        <button>ADICIONAR VINHO</button>
                    </ComponenteInicial>


                    <SearchBarBox>
                        <input placeholder="Pesquise pelo nome ou país" />
                    </SearchBarBox>
                    <VinhosContainerContent>
                        <Vinho />
                        <Vinho />
                        <Vinho />
                        <Vinho />
                        <Vinho />
                        <Vinho />
                        <Vinho />
                        <Vinho />
                        <Vinho />
                    </VinhosContainerContent>
                </VinhosContainer>
            </HomeContent>
        </HomeComponent>
    )
}


const HomeComponent = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    padding-bottom: 100px;
    background: linear-gradient(to right, #03071e, #370617, #03071e);
`;

const HomeContent = styled.div`
    margin-top: 50px;
    width: 100%;

    h1{
        color: white;
        text-shadow: 15px 15px 1px rgba(0,0,0,1);
    }

    @media (max-width: 900px){
        h1{
            font-size: 28px;
        }
    }
`;


const ComponenteInicial = styled.div`
    width: 100%;
    display: flex;
    padding: 0 40px;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;

    h1 {
        color: white;
        text-shadow: 15px 15px 1px rgba(0,0,0,1);
    }

    button{
        width: 150px;
        height: 35px;
        cursor: pointer;
    }

    @media (max-width: 800px){
        flex-direction: column;
    }
`; 

const VinhosContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    padding: 0 30px;
    box-sizing: border-box;
    gap: 30px;

    h2{
        width: 100%;
        text-align: start;
        color: rgba(255,255,255,0.7);
    }

    
    @media (max-width: 900px){
        margin-top: 20px;
        padding: 0 20px;
        box-sizing: border-box;
        gap: 30px;

        h2{
            text-align: center;
           font-size: 18px;
        }
    }
`;


const VinhosContainerContent = styled.div`
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;

    @media (max-width: 900px){
        gap: 10px;
    }
`;

const SearchBarBox = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;

    input{
        width: 100%;
        height: 40px;
        padding-left: 30px;
        background: linear-gradient(to right, #2b2d42, #8d99ae, #2b2d42);
        border: 0;
        box-sizing: border-box;
        font-size: 18px;
        color: white;
        text-transform: uppercase;
    }

    @media (max-width: 900px){
        width: 100%;

        input{
            background: linear-gradient(to right, white, white, white);
            padding-left: 10px;
            font-size: 16px;
            color: rgba(0,0,0,0.6);
            font-weight: 600;
        }
    }
`;