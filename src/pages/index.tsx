import { FC } from 'react'
import { Inter } from '@next/font/google'
import { Button } from "@nextui-org/react";
import { MainLayout } from '@/layouts/';

const inter = Inter({ subsets: ['latin'] })

const listPokemons: string[] = ['Pokemon1', 'Pokemon2', 'Pokemon3']

const HomePage: FC = () => {
  return (
    <>
      <MainLayout title='Lista de Pokemons' >
        <Button>
          Next UI
        </Button>
      </MainLayout>
    </>
  )
}

export default HomePage