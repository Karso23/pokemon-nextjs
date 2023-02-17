import React from 'react'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import axios from 'axios'
import { MainLayout } from '@/layouts'
import { PokeDetail } from '@/interfaces'
import PokemonDetails from '@/components/details/PokemonDetails'
import { pokeApi } from 'api'
import { PokemonByNameAPI } from '../../../interfaces/pokemon-api-by-name';

interface Props {
  pokemon: PokeDetail;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {

  return (
    <>
      <MainLayout title={pokemon.name.toUpperCase()}>

        <PokemonDetails pokemon={pokemon} />

      </MainLayout>

    </>
  )
}

export default PokemonByNamePage;

//* ================= Logica que se ejecuta del lado del servidor ================


export const getStaticPaths: GetStaticPaths = async (ctx) => {

  // Aqui guardamos lo que viene de la Api
  const { data } = await pokeApi.get(`/pokemon?limit=10`)


  const arr = data.results
  const arrNames: string[] = []

  // Codigo que crea un array con n elementos
  for (const pokemon of arr) {
    arrNames.push(pokemon.name)
  }

  // Manera diferente de mapear los nuevos paths
  const paths = arrNames.map(name => ({
    params: { name: name }
  }))

  paths.map(e => console.log(e.params.name));


  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (paths) => {

  // Aqui guardamos lo que viene por params (del url)
  const { params } = paths;

  // Aqui guardamos lo que viene de la Api
  const { data } = await axios.get<PokemonByNameAPI>(`https://pokeapi.co/api/v2/pokemon/${params?.name}`)

  const finalObject = {
    name: data.name,
    id: data.id,
    stats: data.stats,
    types: data.types,
    abilities: data.abilities,
    moves: data.moves.slice(0, 10),
    sprites: data.sprites
  };

  return {
    props: {
      pokemon: finalObject
    }
  }
}
