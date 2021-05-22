import React from "react";
import { Box, Botao } from "../../Components/UI";
import { extratoLista } from "../../info";
import Item from "../Item";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(( extrato ) => {
        return (
          <Item key={extrato.id} extrato={extrato} />
        );
      })}
      <Botao>Ver Mais</Botao>
    </Box>
  );
};
export default Extrato;
