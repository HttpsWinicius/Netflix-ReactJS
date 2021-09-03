import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export const App = () => {

  const [listaDeFilmes, setListaDeFilmes] = useState([]);
  const [filmeEmDestaque, setFilmeEmDestaque] = useState(null);

  useEffect(() => {
    const carregarTudo = async () => {
      //Pegando a lista dos filmes
      let lista = await Tmdb.pegarListaDeFilmes();
      setListaDeFilmes(lista);

      //Filme em destaque  
      let filtrarPorSlug = lista.filter(i => i.slug === 'originals');
      let pegarFilmeAleatorioDeAcordoComFiltro = Math.floor(Math.random() * (filtrarPorSlug[0].items.results.length - 1));
      let filmeEscolhidoParaDestaque = filtrarPorSlug[0].items.results[pegarFilmeAleatorioDeAcordoComFiltro];
      let infoFilmeEscolhidoParaDestaque = await Tmdb.pegarInformacoesDoFilme(filmeEscolhidoParaDestaque.id, 'tv');
      setFilmeEmDestaque(infoFilmeEscolhidoParaDestaque);
  }
    carregarTudo();
  }, [])

    return (
      <div className="page">
        <Header/>
        {filmeEmDestaque && 
        <FeaturedMovie item={filmeEmDestaque} />
        }
        <section className="lists">
        {listaDeFilmes.map((item, key) => ( 
            <MovieRow 
              key={key} 
              title={item.title} 
              items={item.items} />
        ))}
        </section>

      </div>
    );

}

export default App;