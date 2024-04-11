import Image from "next/image";
import Transaction from "../UI/transaction/transaction";
import styles from '@/app/UI/Dashboard/DashBoard.module.css'

export default function DashBoard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Transaction/>
      </div>
      
    </div>
  );
}
