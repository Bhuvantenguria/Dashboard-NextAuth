"use client"

import { MdOutlineNotifications,MdOutlineChat ,MdSearch, MdPublic } from "react-icons/md"
import styles from "@/app/UI/NavBar/NavBar.module.css"
import { usePathname } from "next/navigation"

const NavBar = () => {

  const pathName = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}> {pathName.split('/').pop()} </div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch/>
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20}/>
          <MdOutlineNotifications size={20}/>
          <MdPublic size={20}/>
        </div>
      </div>
    </div>
  )
}

export default NavBar