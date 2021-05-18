import React, { Component } from "react";
import ListaDeCategorias from "./components/ListaDeCategorias";
import FomularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import Categorias from "./dados/Categorias";

class App extends Component {
  constructor(){
    super()
    this.categorias = new Categorias();
  }


  render() {
    return (
      <section className="content">
        <FomularioCadastro 
          categorias={this.categorias}
        />
        <main className="main-content">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
        </main>
      </section>
    );
  }
}

export default App;
