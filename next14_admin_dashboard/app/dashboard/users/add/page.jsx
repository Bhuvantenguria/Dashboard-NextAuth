import styles from '@/app/UI/Dashboard/add/add.module.css'
import addUser from '@/app/lib/action'
const AddUserPage = () => {
  return (
    <div className={styles.container}>
        <form action={addUser} className={styles.form}>
            <input type="text" placeholder="username" name="username" required />
            <input type="email" placeholder="E-Mail" name="email" required />
            <input type="password" placeholder="Password" name="password" required />
            <input type="number" placeholder="Mobile No." name="phone" />
            <select name="isAdmin" id="isAdmin">
                <option value={false}>isAdmin ?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <select name="isActive" id="isActive">
                <option value={false}>isActive ?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <textarea name="address" id="address" rows="16" placeholder="Address"></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddUserPage