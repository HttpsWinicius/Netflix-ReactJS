import React, {useState} from 'react';
import './MovieRow.css';
import montarUrlImagem from '../../GlobalVariables/montarUrlImagem';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export const MovieRow = ({title, items}) => {

    const [scrollX, setScrollX] = useState(-400);
    const [metadeDaTelaUsuario] = useState(window.innerWidth / 2);
    const [limiteLadoEsquerdo] = useState(0);
    const [valorQueVaiMandarParaOLado] = useState(Math.round(metadeDaTelaUsuario));
    const [larguraTotalDaLista] = useState(items.results.length * 150);

    const handleLeftArrowClick = () => {
        let novoValorDoScrollLadoEsquerdo = scrollX + valorQueVaiMandarParaOLado;

        if (novoValorDoScrollLadoEsquerdo > limiteLadoEsquerdo) {
            novoValorDoScrollLadoEsquerdo = 0;
        }

        setScrollX(novoValorDoScrollLadoEsquerdo);
    }

    const handleRigthArrowClick = () => {

        let novoValorDoScrollLadoDireito = scrollX - valorQueVaiMandarParaOLado;
        let tamanhoTela = window.innerWidth;

        //TODO: transformar em função (essa é uma operação matematica para não ultrapassar a rolagem do lado direito)
        if (tamanhoTela - larguraTotalDaLista > novoValorDoScrollLadoDireito) {
            novoValorDoScrollLadoDireito = (tamanhoTela - larguraTotalDaLista) - 60;
        }

        setScrollX(novoValorDoScrollLadoDireito);

    }


    return (
        <div className="movieRow">
            <div className="movieRow--left" onClick={handleLeftArrowClick}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>
            <div className="movieRow--rigth" onClick={handleRigthArrowClick}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{marginLeft: scrollX, width: larguraTotalDaLista}}>
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