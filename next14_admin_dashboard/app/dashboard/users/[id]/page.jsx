import styles from '@/app/UI/Dashboard/users/userView/userView.module.css'
import Image from 'next/image'
import { updateUser } from '@/app/lib/action'
import { fetchUser } from '@/app/lib/data'

const SingleUserPage = async({params}) => {
    const {id} = params;
    console.log(params)
    const user = await fetchUser(id);
    console.log(user)
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src='/prof.webp' alt = "User Image" fill/>
            </div>
            <h1>{user.username}</h1>
        </div>
        <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
            <input type="hidden" name="id" value={user.id} />
            <label htmlFor='username'>UserName</label>
            <input type="text" name='username' id='username' placeholder= {user.username} />
            <label htmlFor="email">E-Mail</label>
            <input type="email" id='email' placeholder= {user.email} name='email' />
            <label htmlFor="password">Password</label>
            <input type="password" id='password' placeholder= {user.password} name='password' />
            <label htmlFor="address">Address</label>
            <textarea name="address" id="address" placeholder= {user.address} ></textarea>
            <label htmlFor="isAdmin">isAdmin</label>
            <select name="isAdmin" id="isAdmin">
                <option value={false}>isAdmin ?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <label htmlFor="isActive">isActive</label>
            <select name="isActive" id="isActive">
                <option value={false}>isActive ?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <button type='submit'>Update</button>
        </form>
        </div>
    </div>
  )
}

export default SingleUserPage