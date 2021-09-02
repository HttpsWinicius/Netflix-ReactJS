import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb'

export const App = () => {

  const [listaDeFilmes, setListaDeFilmes] = useState([]);

  const carregarTudo = async () => {
    //Pegando a lista dos filmes
    let listaDeFilmes = await Tmdb.pegarListaDeFilmes();
    setListaDeFilmes(listaDeFilmes);
  }

  useEffect(() => {
    carregarTudo();
  }, [])

    return (
      <div className="page">
        Header 
        Destaque 
        As lista
        Rodape
      </div>
    );

}