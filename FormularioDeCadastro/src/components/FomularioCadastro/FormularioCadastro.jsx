import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from './DadosPessoais'
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({onSubmit, validacoes}) {
  const [etapa, setEtapa] = useState(0)
  const [dados, setDados] = useState({})
  useEffect(()=>{
    if(etapa === formularios.length-1){
      onSubmit(dados)
    }
  })

  const formularios = [
    <DadosUsuario onSubmit={coletarDados} />,
    <DadosPessoais onSubmit={coletarDados} />,
    <DadosEntrega onSubmit={coletarDados} />,
    <Typography variant="h5">Cadastro Concluído!</Typography>
  ]

  function coletarDados(info){
    setDados({...dados, ...info})
    nextForm();
  }

  function nextForm(){
    setEtapa(etapa + 1)
  }

  return( 
    <>
      <Stepper activeStep={etapa}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formularios[etapa]}
    </>
  );
}

export default FormularioCadastro;

