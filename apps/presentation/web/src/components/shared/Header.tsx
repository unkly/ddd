import { css } from '@emotion/react'
import { theme } from '../../constants/theme'
import { Button, Typography } from '@mui/material'
import { signIn, signOut, useSession } from 'next-auth/react'

export const Header = () => {
  const session = useSession()
  return (
    <header css={styles.rootContainer}>
      <Typography fontSize={24}>recipeaceful</Typography>
      <div css={styles.buttonContainer}>
        {session.status === 'authenticated' ? (
          <Button
            css={styles.button}
            onClick={() => void signOut()}>
            ログアウト
          </Button>
        ) : (
          <Button
            onClick={() => signIn()}
            css={styles.button}>
            ログイン
          </Button>
        )}
      </div>
    </header>
  )
}

const styles = {
  rootContainer: css`
    margin: 0;
    padding: 14px;
    box-shadow: ${theme.boxShadow[8]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 12px 10%;
  `,
  buttonContainer: css`
    display: flex;
    gap: 12px;
  `,
  button: css`
    border: 1px solid white;
    border-radius: 16px;
    padding: 6px 12px;
    font-size: 16px;
    &:hover {
      background-color: ${theme.colors.blue.A200};
      color: white;
      box-shadow: ${theme.boxShadow[0]};
    }
  `
}
