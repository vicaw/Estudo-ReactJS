import React, { Component } from "react";
import "./style.css"

class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_header">
          <h3 className="card-nota_title">{this.props.titulo}</h3>
        </header>
        <p className="card-nota_content">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
