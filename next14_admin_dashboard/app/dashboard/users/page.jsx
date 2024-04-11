import styles from '@/app/UI/Dashboard/users/users.module.css'
import { fetchUsers } from '@/app/lib/data'
import { deleteUser } from '@/app/lib/action'
import Image from 'next/image'
import Link from 'next/link'

const UserPage = async() => {

  const users = await fetchUsers();
  // console.log(users)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/users/add">
        <button className={styles.addButton}>Add New</button>
        </Link>

      </div>
      <table className={styles.table}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Created At</td>
                    <td>Role</td>
                    <td>Status</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
  {users.map(user => (   
    <tr key={user.id}>
      <td>
        <div className={styles.user}>
          <Image src="/prof.webp" 
            alt="User Image" 
            width={40} 
            className={styles.userImage} 
            height={40} />
          {user.username}
        </div>
      </td>
      <td>{user.email}</td>
      <td>{user.createdAt.toString().slice(4,16 )}</td>
      <td>{user.isAdmin ? "Admin" : "Not Admin"}</td>
      <td>{user.isAdmin ? "Online" : "Offline"}</td>
      <td>
        <Link href={`/dashboard/users/${user.id}`}>
          <button className={`${styles.button} ${styles.view}`}>View</button>
        </Link>
        <form action={deleteUser}>
          <input type="hidden" name="id" value={user.id} />
          <button className={`${styles.button} ${styles.delete}`}>Delete</button>
          </form>
      </td>
    </tr>
  ))}
</tbody>

        </table>
    </div>
  )
}

export default UserPage