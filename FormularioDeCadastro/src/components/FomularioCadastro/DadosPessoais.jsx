import React, { useState, useContext } from "react";
import { Button, Checkbox, TextField, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";


import "@fontsource/roboto";

function DadosPessoais({ onSubmit }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, canSubmit] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSubmit()) {
          onSubmit({ nome, sobrenome, cpf, newsletter });
        }
      }}
    >
      <TextField
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="dense"
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
      />

      <TextField
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="dense"
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
      />

      <TextField
        name="cpf"
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="dense"
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
      />

      <FormControlLabel
        control={
          <Checkbox
            name="newsletter"
            color="primary"
            checked={newsletter}
            onChange={(event) => {
              setNewsletter(event.target.checked);
            }}
          />
        }
        label="Receber e-mails sobre novidades e promoções"
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
