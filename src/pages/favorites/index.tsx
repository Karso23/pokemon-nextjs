import React from 'react'
import { MainLayout } from '@/layouts'
import { NoFavorites, Favorites as FavoritesPokemons } from '@/components';
import { localFavorites } from 'utils';

const Favorites = () => {

  const favorites = localFavorites.savedPokemons()

  return (

    <MainLayout>
      {
        favorites.length > 0
          ? <FavoritesPokemons pokemons={favorites} />
          : <NoFavorites />
      }
    </MainLayout>

  )
}

export default Favorites