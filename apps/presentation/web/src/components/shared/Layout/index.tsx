import { Header } from '../Header'
import { NavigationBar } from '../NavigationBar'
import { CummunityList } from '../CommunityList'
import { layout } from './styles.css'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className={layout.rootContainer}>
      <Header />
      <div className={layout.contentContainer}>
        <NavigationBar />
        <div className={layout.scrollContainer}>{children}</div>
        <CummunityList />
      </div>
    </div>
  )
}