import React, { FC } from 'react'
import Image from 'next/image'
import { Spacer, Text, useTheme } from '@nextui-org/react'

const imgSource = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png';

export const Navbar: FC = () => {

  const { theme } = useTheme()

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.black.value
    }}>

      <Image
        src={imgSource}
        alt='icono de la app'
        width={100}
        height={100}
      />

      <Text h1>P</Text>
      <Text h3>okémon</Text>

      <Spacer css={{ flex: 1 }} />

      <Text>Favoritos</Text>

    </div>
  )
}
