import { PostForm } from './PostForm'
import { getServerSession } from 'next-auth'
import { nextAuthOptions } from '@/libs/nextAuth/options'
import { timeLine } from './styles.css'

export const TimeLinePage = () => {
  return <Main />
}

export const Main = async () => {
  const session = await getServerSession(nextAuthOptions)

  return (
    <div className={timeLine.main.rootContainer}>
      <div className={timeLine.main.postForm}>
        <PostForm user={session?.user} />
      </div>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
    </div>
  )
}
