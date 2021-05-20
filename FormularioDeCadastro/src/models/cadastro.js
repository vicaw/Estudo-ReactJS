import EmailValidator from "email-validator";

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "O CPF deve ter 11 dígitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 8) {
    return { valido: false, texto: "Sua senha deve ter 8 dígitos ou mais" };
  }

  if (senha.length > 72) {
    return {
      valido: false,
      texto: "Sua senha não pode ter mais do que 72 dígitos.",
    };
  }

  return { valido: true, texto: "" };
}

function validarEmail(email) {
  if (!EmailValidator.validate(email)) {
    return { valido: false, texto: "E-mail inválido." };
  }

  return { valido: true, texto: "" };
}

export { validarCPF, validarSenha, validarEmail };
