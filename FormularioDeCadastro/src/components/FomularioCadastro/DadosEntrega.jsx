import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function DadosEntrega({ onSubmit }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ cep, endereco, numero, cidade, estado });
      }}
    >
        
      <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="dense"
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
      />

      <TextField
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        fullWidth
        margin="dense"
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
      />

      <TextField
        id="numero"
        label="Número"
        type="number"
        variant="outlined"
        margin="dense"
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
      />

      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="dense"
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
      />

      <TextField
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="dense"
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
