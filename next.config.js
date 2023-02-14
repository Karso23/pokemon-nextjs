/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
 /*  En esta propiedad indicamos los dominios que son permitdos para importar imagenes para el build */
  images: {
    domains:['raw.githubusercontent.com']
  }
}

module.exports = nextConfig
