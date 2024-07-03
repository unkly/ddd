import { Button } from '@mui/material'
import { Session, getServerSession } from 'next-auth'
import Image from 'next/image'
import { timeLine } from './styles.css'

type Props = {
  user?: Session['user'] | null
}

const usePostForm = async (userId?: string | null) => {
  const session = await getServerSession()
  return {
    session,
  }
}

export const PostForm = async ({ user }: Props) => {
  const { session } = usePostForm(user?.id)
  return (
    <div className={timeLine.postForm.rootContainer}>
      <div className={timeLine.postForm.inputContainer}>
        <Image
          src={user?.image ?? '/icons/home.png'}
          alt=""
          width={38}
          height={38}
        />
        <input
          className={timeLine.postForm.input}
          placeholder="自分のレシピを投稿しよう！"
        />
      </div>
      <div className={timeLine.postForm.bottomContainer}>
        <Image
          src="/icons/photo.png"
          height={32}
          width={32}
          alt=""
          style={{
            cursor: 'pointer',
          }}
        />
        <Button
          sx={{
            color: 'black',
            border: `1px solid black`,
            borderRadius: 0,
            width: '32px',
            height: '32px',
            padding: '4px 8px',
          }}>
          投稿
        </Button>
      </div>
    </div>
  )
}
