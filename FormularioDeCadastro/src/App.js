import "./App.css";
import FormularioCadastro from "./components/FomularioCadastro/FormularioCadastro";
import { Container } from "@material-ui/core";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro"
import { validarCPF, validarSenha, validarEmail } from "./models/cadastro";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <ValidacoesCadastro.Provider
        value={{ cpf: validarCPF, senha: validarSenha, email: validarEmail }}
      >
        <FormularioCadastro
          onSubmit={(dados) => {
            console.log(dados);
          }}
        />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

export default App;
