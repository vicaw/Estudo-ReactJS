import React, { Component } from "react";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"
import "./style.css"

class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_header">
          <h3 className="card-nota_title">{this.props.titulo}</h3>
          <DeleteSVG className="card-nota_delete"
            onClick = { () => this.props.deletarNota(this.props.index) }
          />
        </header>
        <p className="card-nota_content">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
