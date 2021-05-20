import { Button, FormControl, FormHelperText, Input, InputLabel, TextField } from "@material-ui/core";
import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from 'formik';

function DadosUsuario({ onSubmit, validacoes }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({
    email: { valido: true, texto: "" },
    senha: { valido: true, texto: "" },
  });

  function validarCampo(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function canSubmit() {
    for (let campo in erros) {
      if (erros[campo].valido === false) {
        return false;
      }
    }

    return true;
  }

  return (
    <>

<Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
            onSubmit({ email, senha })
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
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
        onBlur={validarCampo}
       
      />
           <ErrorMessage name="email" component="div" />
           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>






    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSubmit()) {
          onSubmit({ email, senha });
        }
      }}
    >

        
      
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
        onBlur={validarCampo}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
    </>
  );
}

export default DadosUsuario;

/*
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
        onBlur={validarCampo}
        error={!erros.email.valido}
        helperText={erros.email.texto}
      />
*/