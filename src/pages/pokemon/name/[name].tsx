import React from 'react'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { MainLayout } from '@/layouts'
import { PokeDetail } from '@/interfaces'
import PokemonDetails from '@/components/details/PokemonDetails'
import { pokeApi } from 'api'
import { getPokemonInfo } from 'utils'
interface Props {
  pokemon: PokeDetail;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {

  return (
    <>
      <MainLayout title={`${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`}>

        <PokemonDetails pokemon={pokemon} />

      </MainLayout>

    </>
  )
}

export default PokemonByNamePage;

//* ================= Logica que se ejecuta del lado del servidor ================


export const getStaticPaths: GetStaticPaths = async (ctx) => {

  // Aqui guardamos lo que viene de la Api
  const { data } = await pokeApi.get(`/pokemon?limit=50`)


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

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (paths) => {

  const { params } = paths;

  const pokemon = await getPokemonInfo.get_pokemon_info_name(`${params?.name}` || '')

  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: { pokemon },
    revalidate: 86400 //in seconds -> 60 * 60 * 24 asi se validara la pagina cada 24Hrs
  }

}
