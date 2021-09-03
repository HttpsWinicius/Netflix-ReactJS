import React from 'react';
import './MovieRow.css';
import montarUrlImagem from '../GlobalVariables/montarUrlImagem'

export const MovieRow = ({title, items}) => {
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                {items.results.length > 0 && items.results.map((item, key) => (
                    <div key={key} className="movieRow--item">
                        <img src={montarUrlImagem("w300") + item.poster_path} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default MovieRow;