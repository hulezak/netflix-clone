

const API_key = process.env.REACT_APP_API_KEY
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_key}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_key}&with_genres=10749`,
    fetchDocumentaryMovies: `/discover/movie?api_key=${API_key}&with_genres=99`,
    fetchTvShows: `/discover/tv?api_key=${API_key}&language=en-US&page=1`
};



export default requests;

