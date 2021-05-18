import React, { Component } from "react";
import Notas from "../../dados/Notas";
import Categoria from "../Categoria"
import "./style.css"

class ListaDeCategorias extends Component {
    constructor(){
        super()
        this.state = {categorias:[]}

        this._novasCategorias = this._novasCategorias.bind(this)
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias)
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias)
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias})
    }

  _handleEventInput(e) {
    if (e.key === "Enter") {
        const novaCategoria = {nome: e.target.value, listaNotas: new Notas()}
        console.log(this.state.categorias)
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
                <Categoria
                    categoria = {categoria}
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
