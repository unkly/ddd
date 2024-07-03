import Image from 'next/image'
import { navigationBar } from './styles.css'

export const NavigationBar = () => {
  return (
    <div className={navigationBar.rootContainer}>
      <nav>
        <ul className={navigationBar.list}>
          <li className={navigationBar.item}>
            <Image
              src="/icons/home.png"
              width={24}
              height={24}
              alt=""
            />
            <p className={navigationBar.itemText}>Home</p>
          </li>
          <li className={navigationBar.item}>
            <Image
              src="/icons/myCollection.png"
              width={24}
              height={24}
              alt=""
            />
            <p className={navigationBar.itemText}>Community</p>
          </li>
          <li className={navigationBar.item}>
            <Image
              src="/icons/message.png"
              width={24}
              height={24}
              alt=""
            />
            <p className={navigationBar.itemText}>Message</p>
          </li>
        </ul>
      </nav>
    </div>
  )
}