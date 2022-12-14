import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import './styles/main.css'

import GameBanner from './components/GameBanner'
import AdBanner from './components/AdBanner'
import { AdModal } from './components/AdModal'

import logoImage from './assets/nlw-esports-logo.svg'
import axios from 'axios'

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data)
    })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImage} alt="logo" />

      <h1 className="text-3xl sm:text-5xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-2 gap-6 m-6 md:grid-cols-6 sm:grid-cols-3">
        {games.map(game => (
          <GameBanner
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <AdBanner />

        <AdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
