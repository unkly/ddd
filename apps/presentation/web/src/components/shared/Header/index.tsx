import { Button, Typography } from '@mui/material'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { header } from './styles.css'

const SearchRecipes = () => {
  return (
    <div className={header.searchRecipes.rootContainer}>
      <Image
        src="/icons/search.png"
        alt=""
        width={20}
        height={20}
      />
      <input
        className={header.searchRecipes.input}
        placeholder="Search for recipes"></input>
    </div>
  )
}

export const Header = () => {
  const session = useSession()
  const router = useRouter()

  const navigate = () => {
    void router.push('/')
  }

  return (
    <header className={header.rootContainer}>
      <Typography
        fontSize={24}
        onClick={navigate}
        className={header.title}>
        recipeaceful
      </Typography>
      <SearchRecipes />
      <div className={header.buttonContainer}>
        {session.status === 'authenticated' ? (
          <Button
            className={header.button}
            onClick={() => void signOut()}>
            logout
          </Button>
        ) : (
          <Button
            onClick={() => void signIn()}
            className={header.button}>
            signin
          </Button>
        )}
      </div>
    </header>
  )
}
