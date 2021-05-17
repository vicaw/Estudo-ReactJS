import React, { Component } from "react";
import "./style.css"

class FormularioCadastro extends Component {
  constructor(props){
    super(props)
    this.titulo=""
    this.texto=""
  }

  handleMudancaTitulo(event){
    event.stopPropagation()
    this.titulo = event.target.value
  }

  handleMudancaTexto(event){
    event.stopPropagation()
    this.texto = event.target.value
  }

  criarNota(event){
    event.preventDefault()
    event.stopPropagation()
    this.props.criarNota(this.titulo, this.texto)
  }

  render() {
    return (
      <form className="form-cadastro "
        onSubmit = {this.criarNota.bind(this)}
      >
        <input className="form-cadastro_input"
          type="text"
          placeholder="Título"
          onChange={this.handleMudancaTitulo.bind(this)}
        />
        <textarea className="form-cadastro_input"
          rows={15}
          placeholder="Escreva sua nota..."
          onChange={this.handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
