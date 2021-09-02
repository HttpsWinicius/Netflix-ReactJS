const API_KEY = '0a7081c6c961c1c19856b21445518d01';
const API_BASE = 'https://api.themoviedb.org/3';
const LINGUAGEM_DA_REQUISICAO = 'language=pt-BR';



const basicFetch = async (endpoint) => {
    const requisicao = await fetch(`${API_BASE}${endpoint}`);

    const jsonDaRequisicao = await requisicao.json();

    return jsonDaRequisicao;
}

export default {
    pegarListaDeFilmes: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&${LINGUAGEM_DA_REQUISICAO}&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?${LINGUAGEM_DA_REQUISICAO}&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?${LINGUAGEM_DA_REQUISICAO}&api_key=${API_KEY}`)
            },
            {
                slug: 'action', 
                title: 'Ação',
                items: await basicFetch(`/discover/movie/with_genres=28&${LINGUAGEM_DA_REQUISICAO}&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy', 
                title: 'Comédia',
                items: await basicFetch(`/discover/movie/with_genres=35&${LINGUAGEM_DA_REQUISICAO}&api_key=${API_KEY}`)
            },
            {
                slug: 'horror', 
                title: 'Terror',
                items: await basicFetch(`/discover/movie/with_genres=27&${LINGUAGEM_DA_REQUISICAO}&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie/with_genres=10749&${LINGUAGEM_DA_REQUISICAO}&api_key=${API_KEY}`)
            },
            {
                slug: 'documentaries', 
                title: 'Documentários', 
                items: await basicFetch(`/discover/movie/with_genres=99&${LINGUAGEM_DA_REQUISICAO}&api_key=${API_KEY}`)
            }

        ]

    }
}