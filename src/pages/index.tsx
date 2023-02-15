import { FC } from 'react'
import { GetStaticProps } from 'next'
import { Grid } from "@nextui-org/react";
import { MainLayout } from '@/layouts/';
import { PokemonCard } from '@/components';
import { PokemonApiResponse, SmallPokemons } from '@/interfaces';
import { pokeApi } from 'api';



//Interface que asignaremos a las props de nuestro componente 
//el tipo de dato lo toma de la interface que importamos de la carpeta interfaces

// Local Interfaces
interface Props {
  pokemons: SmallPokemons[]
}

// Local Constantes
const limit: number = 50;
const urlImg: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/`;


const HomePage: FC<Props> = ({ pokemons }) => {

  return (
    <>
      <MainLayout title='Lista de Pokemons' >

        <Grid.Container gap={2} justify='flex-start'>
          {pokemons.map(({ id, name, img }) => (
            <PokemonCard key={id} id={id} name={name} img={img} />
          ))}
        </Grid.Container>

      </MainLayout>
    </>
  )
}

//* ============================== Logica que se ejecuta del lado del servidor ==========================

//> Esto se ejeecuta antes de que el componente se cargue ya que se ejecuta a nivel servidor es mejor que un useEffect de React.

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonApiResponse>(`/pokemon?limit=${limit.toString()}`)
  const pokemons: SmallPokemons[] = data.results.map((e, i) => ({
    ...e,
    id: i + 1,
    img: `${urlImg}${i + 1}.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
