import axios from 'axios';

// Creamos la direccion URL base de nuestra API
const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})

export default pokeApi;
