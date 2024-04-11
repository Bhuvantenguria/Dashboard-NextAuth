import Image from 'next/image'
import styles from './transaction.module.css'
const Transaction = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Latest Transaction</h2>
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Status</td>
                    <td>Date</td>
                    <td>Amount</td>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>
                        <div className={styles.user}>
                            <Image src ="/prof.webp" 
                            alt = "User Image" width = {40} className={styles.userImage} 
                            height = {40} />
                            Goku
                        </div>
                    </td>
                    <td>
                        <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                    </td>
                    <td>
                        25.02.2024
                    </td>
                    <td>
                        $999
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Transaction