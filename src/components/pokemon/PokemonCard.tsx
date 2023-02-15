import React, { FC } from 'react'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { SmallPokemons } from '@/interfaces';

// Interface local
interface Props {
  pokemon: SmallPokemons
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

  const { id, name, img } = pokemon

  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1}>

      <Card isHoverable isPressable>
        <Card.Header>
          <Text h5># {id}</Text>
        </Card.Header>

        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} />
        </Card.Body>

        <Card.Divider color='primary' />

        <Card.Footer>
          <Row justify='center'>
            <Text transform='capitalize' h3>{name}</Text>
          </Row>
        </Card.Footer>
      </Card>

    </Grid>
  )
}