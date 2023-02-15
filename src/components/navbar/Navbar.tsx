import React, { FC } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { Button, Spacer, Link, Text, useTheme, Grid } from '@nextui-org/react';

const imgSource = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png';

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

      <Button color='warning' ghost css={{ height: 'fit-content' }}>
        <NextLink href='/' passHref>
          <Grid.Container css={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text h1 color='yellow'>P</Text>
            <Text h3>okémon</Text>
            <Text h1 color='yellow'>D</Text>
            <Text h3>ex</Text>
          </Grid.Container>
        </NextLink>
      </Button>


      <Image
        src={imgSource}
        alt='icono de la app'
        width={100}
        height={100}
      />

      <Spacer css={{ flex: 1 }} />

      <Button color='warning' ghost css={{ height: 'fit-content' }}>
        <NextLink href='/favorites' passHref>
          <Text h2 css={{ color: 'orange' }}>Favorites</Text>
        </NextLink>
      </Button>

    </div>
  )
}
