import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb'
import MovieRow from './components/Movie';
import './App.css';
import FeaturedMovie from './components/Featured';
import Header from './components/Header';

export const App = () => {

  const [listaDeFilmes, setListaDeFilmes] = useState([]);
  const [filmeEmDestaque, setFilmeEmDestaque] = useState(null);
  const [isBlackHeader, setIsBlackHeader] = useState(false);

  
  function scrollListener() {
    if(window.scrollY > 10) {
      setIsBlackHeader(true)
    } else {
      setIsBlackHeader(false);
    }

  }


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


  useEffect(() => {

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

    return (
      <div className="page">

        <Header isBlack={isBlackHeader} />


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
        
        <footer>
          Feito por Winicius <span role="img" aria-label="carinha-feliz">☺</span> <br/>
          Direitos de imagem para Netflix <br/>
          Dados pegos do site Themoviedb.org
        </footer>
      </div>
    );

}

export default App;