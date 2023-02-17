import React from 'react'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { MainLayout } from '@/layouts'
import { PokeDetail } from '@/interfaces'
import PokemonDetails from '@/components/details/PokemonDetails'
import { getPokemonInfo } from 'utils';


interface Props {
  pokemon: PokeDetail;
}

const PokemonDetail: NextPage<Props> = ({ pokemon }) => {

  return (
    <>
      <MainLayout title={`${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`}>

        <PokemonDetails pokemon={pokemon} />

      </MainLayout>
    </>
  )
}

export default PokemonDetail;


//* ================= Logica que se ejecuta del lado del servidor ================

//> Esto se ejeecuta antes de que el componente se cargue ya que se ejecuta a nivel servidor es mejor que un useEffect de React.

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  // Intruccion que crea un array de 150 elementos
  const arr151 = [...Array(250)].map((e, i) => `${i + 1}`)

  return {
    paths: arr151.map(id => ({
      params: { id },
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string };

  return {
    props: {
      pokemon: await getPokemonInfo.get_pokemon_by_id(id)
    }
  }


}

