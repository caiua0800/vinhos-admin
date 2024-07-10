import React, { useState } from "react";
import styled from "styled-components";
import TableContainer from "./TableContainer";

export default function Estoque() {
    const [searchTerm, setSearchTerm] = useState("");

    const vinhos = [
        { nome: "Vinho Tinto", pais: "Portugal", preco: "R$50 - R$70", quantidade: 20 },
        { nome: "Vinho Branco", pais: "Brasil", preco: "R$40 - R$60", quantidade: 15 },
        { nome: "Vinho Rosé", pais: "França", preco: "R$60 - R$80", quantidade: 10 },
        { nome: "Vinho Espumante", pais: "Itália", preco: "R$70 - R$90", quantidade: 8 }
    ];

    const filteredVinhos = vinhos.filter(vinho =>
        vinho.nome.toUpperCase().includes(searchTerm.toUpperCase()) ||
        vinho.pais.toUpperCase().includes(searchTerm.toUpperCase())
    );

    return (
        <HomeComponent>
            <HomeContent>
                <ComponenteInicial>
                    <h1>ESTOQUE DISPONÍVEL</h1>
                    <button>ADICIONAR</button>
                </ComponenteInicial>
                <VinhosContainer>
                    <SearchBarBox>
                        <input
                            placeholder="Pesquise pelo nome ou país"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </SearchBarBox>
                    <TableContainer>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Nome do Vinho</th>
                                    <th>País</th>
                                    <th>Preço</th>
                                    <th>Quantidade de Caixas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredVinhos.map((vinho, index) => (
                                    <tr key={index}>
                                        <td>{vinho.nome}</td>
                                        <td>{vinho.pais}</td>
                                        <td>{vinho.preco}</td>
                                        <td>{vinho.quantidade}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </TableContainer>

                </VinhosContainer>
            </HomeContent>
        </HomeComponent>
    );
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
    overflow: hidden;
`;

const HomeContent = styled.div`
    margin-top: 50px;
    width: 100%;
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

    h2 {
        width: 100%;
        text-align: start;
        color: rgba(255,255,255,0.7);
    }
`;

const SearchBarBox = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;

    input {
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
`;



const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    color: white;
    background: linear-gradient(to right, #2b2d42, #8d99ae, #2b2d42);

    th, td {
        padding: 12px 15px;
        text-align: left;
        border: 1px solid #ffff;
        cursor: pointer;
    }

    th {
        background-color: #370617;
    }

    tbody tr:nth-child(even) {
        background-color: #370617;
    }

    tbody tr:hover {
        background-color: #d00000;
    }
`;
