import React, { useState } from "react";
import styled from "styled-components";
import TableContainer from "./TableContainer";

export default function Pedidos() {
    const [searchTerm, setSearchTerm] = useState("");

    const pedidos = [
        { nome: "Irineu Gonsalvez Cavalhiéri", pago: "Sim", entregue: "Sim", valor: 3981, vinhos: [{ nome: 'tinto de aleluia', qtde_caixas: 2 }, { nome: 'branco de aleluia', qtde_caixas: 5 }] },
        { nome: "Sabrina Satto Britto", pago: "Sim", entregue: "Não", valor: 8416, vinhos: [{ nome: 'tinto de aleluia', qtde_caixas: 2 }, { nome: 'branco de aleluia', qtde_caixas: 5 }] },
        { nome: "Brunette Corpotti", pago: "Sim", entregue: "Não", valor: 354, vinhos: [{ nome: 'tinto de aleluia', qtde_caixas: 2 }, { nome: 'branco de aleluia', qtde_caixas: 5 }] },
        { nome: "Dr Luiz da Pereira", pago: "Sim", entregue: "Sim", valor: 5880, vinhos: [{ nome: 'tinto de aleluia', qtde_caixas: 2 }, { nome: 'branco de aleluia', qtde_caixas: 5 }] }
    ];

    const filteredPedidos = pedidos.filter(pedido =>
        pedido.nome.toUpperCase().includes(searchTerm.toUpperCase())
    );

    return (
        <HomeComponent>
            <HomeContent>
                <ComponenteInicial>
                    <h1>PEDIDOS CLIENTES</h1>
                    <button>ADICIONAR</button>
                </ComponenteInicial>
                <PedidosContainer>
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
                                    <th>Cliente</th>
                                    <th>Pago</th>
                                    <th>Entregue</th>
                                    <th>Valor</th>
                                    <th>Vinhos</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPedidos.map((pedido, index) => (
                                    <tr key={index}>
                                        <td>{pedido.nome}</td>
                                        <td>{pedido.pago}</td>
                                        <td>{pedido.entregue}</td>
                                        <td>{pedido.valor}</td>
                                        <td>
                                            {pedido.vinhos.map((vinho, i) => (
                                                <span key={i}>
                                                    {vinho.qtde_caixas} {vinho.nome}
                                                    {i < pedido.vinhos.length - 1 ? ', ' : ''}
                                                </span>
                                            ))}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </TableContainer>

                </PedidosContainer>
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
    overflow: hidden;
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

const PedidosContainer = styled.div`
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
