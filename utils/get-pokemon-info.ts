import { PokemonByNameAPI } from "@/interfaces/pokemon-api-by-name";
import { pokeApi } from 'api';


//> Funcion que regresa la info del api por nombre del Pokemon
//* Request usando axios desde una api creada

const get_pokemon_info_name = async (name: string) => {

  try {

    // Aqui guardamos lo que viene de la Api
    const { data } = await pokeApi.get<PokemonByNameAPI>(`/pokemon/${name}`)

    const obj = {
      name: data.name,
      id: data.id,
      stats: data.stats,
      types: data.types,
      abilities: data.abilities,
      moves: data.moves.slice(0, 10),
      sprites: data.sprites
    }

    return obj

  } catch (error) {
    // retornamos un null por que la promesa regresa lo que resuelve de la data o un null
    return null
  }

}

//> Funcion que regresa la info de la api por id del Pokemon
//* Request usando Fetch

const get_pokemon_by_id = async (id: string) => {

  try {

    const res =
      await
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then(data => data.json())

    return {
      name: res.name,
      id: res.id,
      stats: res.stats,
      types: res.types,
      abilities: res.abilities,
      moves: res.moves.slice(0, 10),
      sprites: res.sprites
    }

  } catch (err) {
    // retornamos un null por que la promesa regresa lo que resuelve de la data o un null
    return null
  }
}

// exportamos las funciones por default
export default { get_pokemon_info_name, get_pokemon_by_id }