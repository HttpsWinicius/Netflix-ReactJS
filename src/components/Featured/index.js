import React from 'react';
import './FeaturedMovie.css';
import montarUrlImagem from '../../GlobalVariables/montarUrlImagem'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export const FeaturedMovie = ({item}) => {

    let dataDoFilme = new Date(item.first_air_date);
    let generos = [];

    for (let i in item.genres) {
        generos.push(item.genres[i].name)
    }

    return(
        <div>
           <section className="featured" id="sectionFeatured" style={{
               backgroundImage: `url(${montarUrlImagem("original")}${item.backdrop_path})`}}>
                <div className="featured--vertical"> 
                    <div className="featured--horizontal">
                        <div className="featured--name">{item.original_name}</div>
                        <div className="featured--info">
                            <div className="featured--points">{item.vote_average} pontos</div>
                            <div className="featured--year">{dataDoFilme.getFullYear()}</div>
                            <div className="featured--seasons">{item.number_of_seasons ? item.number_of_seasons : 'Não há'} temporada{item.number_of_seasons > 1 ? 's' : ''}</div>
                        </div>
                        <div className="featured--description">{item.overview ? item.overview : 'Está serie não possui descrição'}</div>
                        <div className="featured--buttons">
                            <a id="featured--button-assistir" href={`/watch/${item.id}`}> ▶ Assistir</a>
                            <a id="featured--button-minha-lista" href={`/list/add/${item.id}`}> + Minha Lista</a>
                        </div>
                        <div className="featured--genres"><strong>Gêneros: </strong> {generos.join(', ')}</div>
                    </div>
                </div>
           </section>
        </div>
    );
}

export default FeaturedMovie;