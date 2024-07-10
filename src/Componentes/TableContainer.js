import React from "react";
import styled from "styled-components";


export default function TableContainer( { children }) {

    return (

        <TableContainerComponent>
            { children }
        </TableContainerComponent>
    )

}

const TableContainerComponent = styled.div`
    width: 100%;
    max-height: 400px;
    overflow-y: scroll
`;