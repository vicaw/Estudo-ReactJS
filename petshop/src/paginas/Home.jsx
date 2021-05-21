import React from 'react'
import ListaPost from '../components/ListaPost'
import ListaCategorias from '../components/ListaCategorias'


const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>
      <ListaCategorias />
      <ListaPost url={'/posts'}/>
    </main>
  )
}

export default Home
