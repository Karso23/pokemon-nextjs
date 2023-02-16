
//> Funcion que guarda o borra en el localStorage
const toggleFavorite = (id: number) => {
  // Guardamos en esta variable lo que este guardado en local storage
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || `[]`)

  if (favorites.includes(id)) {
    // Si el arreglo ya incluye ese id lo borramos del arreglo
    favorites = favorites.filter(pokeId => pokeId !== id);
  } else {
    // Y si no lo guardamos dentro del arreglo
    favorites.push(id);
  }

  // Al final guardamos el arreglo en el local storage convertido en un Json string
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

//> Funcion que verifica si el id esta guardado en el localStorage
const existInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false;

  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  return favorites.includes(id)
}

// exportamos la funcion
export default { toggleFavorite, existInFavorites }