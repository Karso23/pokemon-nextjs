import { PropsWithChildren } from 'react'
import Head from 'next/head'
import { Navbar } from '@/components'

interface Props {
  title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const MainLayout = ({ children, title }: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Karso23' />
        <meta name='description' content={`Informacion sobre el pokemon ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
        <meta property='og:title' content={`Info About ${title}`} />
        <meta property='og:description' content={`This page is about ${title}`} />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main style={{ padding: '0px 20px' }}>
        {children}
      </main>
    </>
  )
}