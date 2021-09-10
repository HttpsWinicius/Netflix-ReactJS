import linguagemRequisicao from './GlobalVariables/linguagemRequisicao';




const API_KEY = '0a7081c6c961c1c19856b21445518d01';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const requisicao = await fetch(`${API_BASE}${endpoint}`);

    const jsonDaRequisicao = await requisicao.json();

    return jsonDaRequisicao;
}

const Tmdb = {
    pegarListaDeFilmes: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&${linguagemRequisicao}&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?${linguagemRequisicao}&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?${linguagemRequisicao}&api_key=${API_KEY}`)
            },
            {
                slug: 'action', 
                title: 'Ação',
                items: await basicFetch("/discover/movie?api_key=" + API_KEY + "&" + linguagemRequisicao + "&with_genres=28")
            },
            {
                slug: 'comedy', 
                title: 'Comédia',
                items: await basicFetch("/discover/movie?api_key=" + API_KEY + "&" + linguagemRequisicao + "&with_genres=35")
            },
            {
                slug: 'horror', 
                title: 'Terror',
                items: await basicFetch("/discover/movie?api_key=" + API_KEY + "&" + linguagemRequisicao + "&with_genres=27")
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch("/discover/movie?api_key=" + API_KEY + "&" + linguagemRequisicao + "&with_genres=10749")
            },
            {
                slug: 'documentaries', 
                title: 'Documentários', 
                items: await basicFetch("/discover/movie?api_key=" + API_KEY + "&" + linguagemRequisicao + "&with_genres=99")
            }

        ]

    },

    pegarInformacoesDoFilme: async (movieId, type) => {
        let info = {}
        if (movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch("/movie/" + movieId + "?" + linguagemRequisicao + "&" + API_KEY);
                break;
                case 'tv':
                    info = await basicFetch("/tv/" + movieId + "?" + linguagemRequisicao + "&api_key=" + API_KEY);
                break;

                default :
                    info = null;
                break;
            }
        }
        return info;
    }
}

export default Tmdb;