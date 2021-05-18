import React, { Component } from "react";
import ListaDeNotas from "../ListaDeNotas";
import "./style.css"

class Categoria extends Component {
  render() {
    return (
      <>
        <header className="categoria_header">{this.props.categoria.nome}</header>
        <ListaDeNotas
          apagarNota={this.props.categoria.listaNotas.deletarNota.bind(
            this.props.categoria.listaNotas
          )}
          notas={this.props.categoria.listaNotas}
        />
      </>
    );
  }
}

export default Categoria;
