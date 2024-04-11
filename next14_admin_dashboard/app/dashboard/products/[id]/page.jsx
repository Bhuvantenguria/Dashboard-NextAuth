import styles from '@/app/UI/Dashboard/Products/viewProduct/viewProduct.module.css'
import Image from 'next/image'
const ViewProductPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src='/prof.webp' alt = "User Image" fill/>
            </div>
            <h1>Goku</h1>
        </div>
        <div className={styles.formContainer}>
        <form action='' className={styles.form}>
            <label htmlFor='name'>Title</label>
            <input type="text" name='name' id='name' placeholder='SensuBeans'/>
            <label htmlFor="price">Price</label>
            <input type="number" id='price' placeholder='$99' name='price' />
            <label htmlFor="stocks">Stocks</label>
            <input type="number" id='stocks' placeholder='74' name='stocks' />
            <label htmlFor='color'>Color</label>
            <input type="text" name='color' id='color' placeholder='Green'/>
            <label htmlFor='size'>Size</label>
            <input type="text" name='size' id='size' placeholder='Small'/>
            <label htmlFor="desc">Description</label>
            <textarea name="desc" id="desc" placeholder='You can cure any disease 
            and gain your stamina back'></textarea>
            <label htmlFor="category">Category</label>
            <select name="category" id="category">
            <option value='general'>Medicine </option>
                <option value='kitchen'>Kitchen</option>
                <option value='phone'>Phone</option>
                <option value="computer">Computer</option> 
            </select>
            <button type='submit'>Update</button>
        </form>
        </div>
    </div>
  )
}

export default ViewProductPage