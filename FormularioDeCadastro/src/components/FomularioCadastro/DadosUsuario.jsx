import { Button, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario( { onSubmit } ) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, canSubmit] = useErros(validacoes);


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSubmit()) {
          onSubmit({ email, senha });
        }
      }}
    >
      <TextField
        id="email"
        name="email"
        label="E-mail"
        type="text"
        variant="outlined"
        fullWidth
        margin="dense"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.email.valido}
        helperText={erros.email.texto}
      />

      <TextField
        id="senha"
        name="senha"
        label="Senha"
        type="password"
        variant="outlined"
        fullWidth
        margin="dense"
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
