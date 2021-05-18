import React, { useState } from "react";
import {
  Button,
  Checkbox,
  TextField,
  FormControlLabel,
  Typography,
} from "@material-ui/core";

import "@fontsource/roboto";

function FormularioCadastro({onSubmit, validarCPF}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");

  const [erros, setErros] = useState({cpf: {valido:true, texto:""}})

  return (
    <section className="form-cadastro">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit({nome, sobrenome, cpf});
        }}
      >

        <TextField
          value={nome}
          onChange={(event) => {
            let tmp = event.target.value
            if(tmp.length >= 3){
                tmp = tmp.substr(0,3)
            }
            setNome(tmp);
          }}
          id="nome"
          label="Nome"
          variant="outlined"
          fullWidth
          margin="dense"
        />

        <TextField
          value={sobrenome}
          onChange={(event) => {
            setSobrenome(event.target.value);
          }}
          id="sobrenome"
          label="Sobrenome"
          variant="outlined"
          fullWidth
          margin="dense"
        />

        <TextField
          value={cpf}
          onChange={(event) => {
            setCpf(event.target.value);
          }}

          onBlur={(event) => {
            const valido = validarCPF(cpf);
            setErros({cpf:valido})
          }}
          error={!erros.cpf.valido}
          helperText={erros.cpf.texto}
          id="cpf"
          label="CPF"
          variant="outlined"
          fullWidth
          margin="dense"
        />

        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Receber e-mails sobre novidades e promoções"
        />

        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>

      </form>
    </section>
  );
}

export default FormularioCadastro;
