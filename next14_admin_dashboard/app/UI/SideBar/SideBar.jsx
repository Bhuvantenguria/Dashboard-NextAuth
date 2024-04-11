import Image from 'next/image'
import styles from '@/app/UI/SideBar/SideBar.module.css'
import { 
  MdAttachMoney,
  MdDashboard,
  MdShoppingBag,
  MdSupervisedUserCircle,
} 
 from "react-icons/md";

import MenuLink from './MenuLink/MenuLink';

const menuItems = [
  {
    title : "Users",
    list : [
      {
        title : "DashBoard" ,
        path : "/dashboard",
        icon : <MdDashboard/>
      },
      {
        title : "User" ,
        path : "/dashboard/users",
        icon : <MdSupervisedUserCircle/>
      },
      {
        title : "Products" ,
        path : "/dashboard/products",
        icon : <MdShoppingBag/>
      },
      {
        title : "Transactions" ,
        path : "/dashboard/transaction",
        icon : <MdAttachMoney/>
      }
      
    ]
  }
]


export default function SideBar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src ="/prof.webp" alt="User Image" height="60" width="60"/>
        <div className={styles.userDetails}>

          <span className={styles.userName}>Hello</span>
          <span className={styles.userTitle}>World</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((item) => (
            <li key = {item.title}>
              <span className={styles.item}>{item.title}</span>
              {item.list.map((i) => (
                  <MenuLink item = {i} key = {i.title} />
              ))}
            </li>
        ))
        }
      </ul>

    </div>
  )
}
