import React, { useState } from "react";
import styled from "styled-components";
import TableContainer from "./TableContainer";

export default function Clientes() {
    const [searchTerm, setSearchTerm] = useState("");

    const clientes = [
        { nome: "Irineu Gonsalvez Cavalhiéri", cpf: "123.456.789-00", endereco: "Rua A, 123", contato: "(11) 1234-5678" },
        { nome: "Sabrina Satto Britto", cpf: "987.654.321-00", endereco: "Avenida B, 456", contato: "(21) 8765-4321" },
        { nome: "Brunette Corpotti", cpf: "456.789.123-00", endereco: "Praça C, 789", contato: "(31) 4567-8901" },
        { nome: "Dr Luiz da Pereira", cpf: "321.654.987-00", endereco: "Alameda D, 101", contato: "(41) 7890-1234" }
    ];

    const filteredClientes = clientes.filter(cliente =>
        cliente.nome.toUpperCase().includes(searchTerm.toUpperCase())
    );

    return (
        <HomeComponent>
            <HomeContent>
                <ComponenteInicial>
                    <h1>CLIENTES</h1>
                    <button>ADICIONAR</button>
                </ComponenteInicial>
                <ClientesContainer>
                    <SearchBarBox>
                        <input
                            placeholder="Pesquise pelo nome do cliente"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </SearchBarBox>
                    <TableContainer>

                        <Table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Endereço</th>
                                    <th>Contato</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredClientes.map((cliente, index) => (
                                    <tr key={index}>
                                        <td>{cliente.nome}</td>
                                        <td>{cliente.cpf}</td>
                                        <td>{cliente.endereco}</td>
                                        <td>{cliente.contato}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </TableContainer>

                </ClientesContainer>
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
    overflow: hidden;
    box-sizing: border-box;
    padding-bottom: 100px;
    background: linear-gradient(to right, #03071e, #370617, #03071e);
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

const ClientesContainer = styled.div`
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
