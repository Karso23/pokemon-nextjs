import { Card, Grid } from '@nextui-org/react';
import Image from 'next/image';
import React, { FC } from 'react'
import { urlImg } from '@/helpers';
import { useRouter } from 'next/router';

interface Props {
  pokemons: number[];
}

export const Favorites: FC<Props> = ({ pokemons }) => {

  const router = useRouter();

  const handlerOnPress = (id: string) => {
    router.push(`/pokemon/${id}`)
  }

  return (

    <Grid.Container css={{ marginTop: '5px' }} gap={2}>
      {pokemons.map((pokemon, i) => (

        <Grid key={i} xs={12} sm={4} >
          <Card isHoverable isPressable css={{ padding: '10px' }} onPress={() => handlerOnPress(`${pokemon}`)}>
            <Card.Body style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                src={urlImg(`${pokemon}`)}
                alt='pokemon image'
                width={250}
                height={250}
              />
            </Card.Body>
          </Card>
        </Grid>

      ))}
    </Grid.Container>


  )
}

