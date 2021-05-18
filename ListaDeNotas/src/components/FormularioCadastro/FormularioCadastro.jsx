import React, { Component } from "react";
import "./style.css"

class FormularioCadastro extends Component {
  constructor(props){
    super(props)
    this.titulo=""
    this.texto=""
    this.state = {categorias: []}
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias.bind(this))
  }

  _novasCategorias(categorias){
    this.setState({...this.state, categorias})
  }

  handleMudancaTitulo(event){
    event.stopPropagation()
    this.titulo = event.target.value
  }

  handleMudancaTexto(event){
    event.stopPropagation()
    this.texto = event.target.value
  }

  _handleMudancaCategoria(evento){
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  criarNota(event){
    event.preventDefault()
    event.stopPropagation()
    const index = this.state.categorias.map(e => e.nome).indexOf(this.categoria);
    console.log("0:" , index)
    this.state.categorias[index].listaNotas.adicionarNota({titulo: this.titulo, texto: this.texto})
  }

  render() {
    return (
      <form className="form-cadastro "
        onSubmit = {this.criarNota.bind(this)}
      >
        <select
          onChange={this._handleMudancaCategoria.bind(this)}
          className="form-cadastro_input"
        >
          <option>Sem Categoria</option>

          {this.state.categorias.map((categoria, index) => {
            return <option key={index} >{categoria.nome}</option>;
          })}
        </select>
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
