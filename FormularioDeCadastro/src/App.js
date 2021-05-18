import './App.css';
import FormularioCadastro from './components/FomularioCadastro/FormularioCadastro'
import { Container } from '@material-ui/core'

function App() {
  return (
    <Container maxWidth="sm">
      <FormularioCadastro
        onSubmit = {(dados) =>{
          console.log(dados)
        }}
        validarCPF = {validarCPF}
      />
    </Container>
  );
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido: false, texto:" O CPF deve ter 11 digitos."}
  }

  return {valido:true, texto:""}
}

export default App;
