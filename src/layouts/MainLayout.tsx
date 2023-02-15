import { PropsWithChildren } from 'react'
import Head from 'next/head'
import { Navbar } from '@/components'

interface Props {
  title?: string;
}

export const MainLayout = ({ children, title }: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Karso23' />
        <meta name='description' content={`Informacion sobre el pokemon ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
      </Head>
      <Navbar />
      <main style={{ padding: '0px 20px' }}>
        {children}
      </main>
    </>
  )
}