import styles from '@/app/UI/Dashboard/Products/addProduct/addProduct.module.css'
import { addProduct } from '@/app/lib/action'
const AddProductPage = () => {
  return (
    <div className={styles.container}>
        <form className={styles.form} action={addProduct}>
            <input type="text" placeholder="Title" name="title" required />
            <select name="category" id="category">
                <option value='general'>Choose a Category </option>
                <option value='kitchen'>Kitchen</option>
                <option value='phone'>Phone</option>
                <option value="computer">Computer</option>
            </select>
            <input type="number" placeholder="Price" name="price" required />
            <input type="number" placeholder="Stocks" name="stock" required />
            <input type="text" name="color" placeholder='Color' />
            <input type="text" name="size" placeholder='Size' />
            <textarea name="desc" id="desc" rows="16" placeholder="Write Some Description ..."></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default AddProductPage