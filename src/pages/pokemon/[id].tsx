import React, { FC } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { MainLayout } from '@/layouts'
import { PokeDetail } from '@/interfaces'
import { pokeApi } from 'api'
import PokemonDetails from '@/components/details/PokemonDetails'


interface Props {
  pokemon: PokeDetail;
}

const PokemonDetail: FC<Props> = ({ pokemon }) => {

  return (
    <>
      <MainLayout>

        <PokemonDetails pokemon={pokemon} />

      </MainLayout>
    </>
  )
}

export default PokemonDetail;


//* ================= Logica que se ejecuta del lado del servidor ================

//> Esto se ejeecuta antes de que el componente se cargue ya que se ejecuta a nivel servidor es mejor que un useEffect de React.

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  // Intruccion que crea un array de 150 elementos
  const arr151 = [...Array(500)].map((e, i) => `${i + 1}`)

  return {
    paths: arr151.map(id => ({
      params: { id },
    })),
    fallback: false
  }
}


// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({ params }) => {

  // Aqui guardamos lo que viene por params (del url)
  const { id } = params as { id: string };

  // Aqui guardamos lo que viene de la Api
  const { data } = await pokeApi.get<PokeDetail>(`/pokemon/${id}`)

  // Aqui solo tomamos lo que nos sirve y lo guardamos en un objeto que
  // mandaremos como props al componente.
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

