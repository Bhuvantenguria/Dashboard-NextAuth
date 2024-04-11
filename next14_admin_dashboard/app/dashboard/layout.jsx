import NavBar from "../UI/NavBar/NavBar"
import SideBar from "../UI/SideBar/SideBar"
import styles from '@/app/UI/Dashboard/DashBoard.module.css'

export default function layout({children}) {
  return (
    <div className={styles.container}>
    <div className={styles.menu}>
      <SideBar />
    </div>
    <div className={styles.content}>
      <NavBar/>
      {children}
    </div>
    </div>
  )
}
