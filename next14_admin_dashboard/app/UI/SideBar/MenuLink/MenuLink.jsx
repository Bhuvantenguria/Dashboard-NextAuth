"use client"
import Link from "next/link";

import styles from '@/app/UI/SideBar/MenuLink/MenuLink.module.css'
import { usePathname } from "next/navigation";

// export default function MenuLink({item}) {
    const MenuLink = ({item}) => {
      const pathName = usePathname();
  return (
    <div>

        <Link href ={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>
            {item.icon}
            {item.title}
        </Link>
      
    </div>
  )
}

export default MenuLink