import { Container, Text } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react'
import { urlImg } from '@/helpers';

export const NoFavorites = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 100px)',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    }}>
      <Text>No Favorites Saved</Text>
      <Image
        src={urlImg('25')}
        alt=''
        width={250}
        height={250}
        style={{
          opacity: '0.1'
        }}
      />
    </Container>
  )
}

