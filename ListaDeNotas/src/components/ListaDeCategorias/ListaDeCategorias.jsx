import React, { Component } from "react";
import ListaDeNotas from "../ListaDeNotas"
import Notas from "../../dados/Notas";
import "./style.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [] };

    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handleEventInput(e) {
    if (e.key === "Enter") {
      const novaCategoria = { nome: e.target.value, listaNotas: new Notas() };
      console.log(this.state.categorias);
      this.props.adicionarCategoria(novaCategoria);
      e.target.value = "";
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <input
          className="lista-categorias_input"
          type="text"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventInput.bind(this)}
        />
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                <header className="categoria_header">
                  {categoria.nome}
                </header>
                <ListaDeNotas
                  apagarNota={categoria.listaNotas.deletarNota.bind(
                    categoria.listaNotas
                  )}
                  notas={categoria.listaNotas}
                />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ListaDeCategorias;
