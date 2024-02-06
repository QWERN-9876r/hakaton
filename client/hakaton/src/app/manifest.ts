import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Family Wallet',
    short_name: 'FW',
    description: 'Family Wallet',
    start_url: '/',
    display: 'standalone',
    background_color: 'rgb(38, 38, 41)',
    theme_color: 'rgb(38, 38, 41)',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      // {
      //   src: '/hakaton.ico',
      //   sizes: 'any',
      //   type: 'image/x-icon',
      // },
    ],
  }
}