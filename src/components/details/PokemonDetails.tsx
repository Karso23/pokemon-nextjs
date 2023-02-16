import React, { FC, useState, useEffect } from 'react'
import Image from 'next/image';

import { Button, Card, Grid, Text } from '@nextui-org/react'

import { PokeDetail } from '@/interfaces'
import { urlImg } from '@/helpers'
import { localFavorites } from 'utils';
interface Props {
  pokemon: PokeDetail;
}

const PokemonDetails: FC<Props> = ({ pokemon }) => {

  const { name, id, stats, types, abilities, moves, sprites } = pokemon;

  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(id))

  // Handler que guarda o borra el id de nuestro arreglo de local storage
  const onToggleFavorite = (): void => {
    localFavorites.toggleFavorite(pokemon.id)

    // Setea lo opuesto que hay en isInFavorites
    setIsInFavorites(!isInFavorites)

  }

  return (
    <>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>

        {/*  // Section 1 */}
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '10px' }}>
            <Card.Body>
              <Card.Image
                src={urlImg((id).toString())}
                alt='pokemon image'
                width={'100%'}
                height={'100%'}
              />
            </Card.Body>
          </Card>
        </Grid>

        {/*  // Section 2 */}
        <Grid xs={12} sm={8}>
          <Card>

            <Card.Header css={{ justifyContent: 'space-between' }}>
              <Text transform='capitalize' h2>{pokemon.name}</Text>
              <Button
                ghost
                onPress={onToggleFavorite}
                color={isInFavorites ? 'error' : 'success'}
              >
                {isInFavorites ? 'Delete from favorites' : 'Save to Favorites'}
              </Button>
            </Card.Header>

            <Card.Divider color='warning' />

            <Card.Body css={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}>
              <ul>
                <Text h2 color='orange'>Stats</Text>
                {stats.map((e, i) => (
                  <li key={i}>
                    <Text size='larger' span>{e.stat.name}: </Text>
                    <Text size='$lg' color='yellow' weight='bold' span>{e.base_stat}</Text>
                  </li>
                ))}
              </ul>
              <ul>
                <Text h2 color='orange'>Types</Text>
                {types.map((e, i) => (
                  <li key={i}>{e.type.name}</li>
                ))}
              </ul>
              <ul>
                <Text h2 color='orange'>Abilities</Text>
                {abilities.map((e, i) => (
                  <li key={i}>{e.ability.name}</li>
                ))}
              </ul>
              <ul>
                <Text h2 color='orange'>Moves</Text>
                {moves.map((e, i) => (
                  <li key={i}>{e.move.name}</li>
                ))}
              </ul>
            </Card.Body>

            <Card.Divider color='warning' />

            <Card.Footer css={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around'
            }}>
              <Image
                src={sprites.front_default}
                alt={name}
                width={130}
                height={130}
              ></Image>
              <Image
                src={sprites.back_default}
                alt={name}
                width={130}
                height={130}
              ></Image>
              <Image
                src={sprites.front_shiny}
                alt={name}
                width={130}
                height={130}
              ></Image>
              <Image
                src={sprites.back_shiny}
                alt={name}
                width={130}
                height={130}
              ></Image>
            </Card.Footer>

          </Card>
        </Grid>

      </Grid.Container>
    </>

  )
}

export default PokemonDetails