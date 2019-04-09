import axios from 'axios'

const api = axios.create({
	baseURL:'http://ec2-3-16-89-162.us-east-2.compute.amazonaws.com/api-twitter-codeigniter/index.php/',
	//baseURL:'http://localhost/codeigniter/index.php/',
	headers: {
		'Content-Type': 'application/json',
	}
})

export const loadGenres 		= () 		 => api.get('genres')
export const saveSerie 			= (newSerie) => api.post('series',newSerie);
export const loadGenresByGenre 	= (genre) 	 => api.post('seriesByGenero', genre);
export const login 				= (login) 	 => api.post('login', login);
export const loadSerieById		= (serie) 	 => api.post('SerieById', serie);

const apis = {
	loadGenres : loadGenres,
	saveSerie : saveSerie,
	loadGenresByGenre : loadGenresByGenre,
	login: login,
	loadSerieById: loadSerieById
}

export default apis;