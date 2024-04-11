import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { fetchProducts } from '@/app/lib/data'
import { deleteProduct } from '@/app/lib/action'
import styles from '@/app/UI/Dashboard/Products/Products.module.css'

const ProductPage = async() => {
  const product = await fetchProducts();
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/products/add">
        <button className={styles.addButton}>Add New</button>
        </Link>

      </div>
      <table className={styles.table}>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Price</td>
                    <td>Created At</td>
                    <td>Stock</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
              {
                product.map((item) => (
                  <tr>
                    <td>
                        <div className={styles.product}>
                            <Image src ="/prof.webp" 
                            alt = "User Image" width = {40} className={styles.productImage} 
                            height = {40} />
                            {item.title}
                        </div>
                    </td>
                    <td>
                      {item.desc}
                    </td>
                    <td>{item.price}</td>
                    <td>
                        {item.createdAt?.toString().slice(4,16)}
                    </td>
                    <td>
                      {item.stock}
                    </td>
                    <td>
                      <Link href='/dashboard/products/viewProduct'>
                        
                      <button className={`${styles.button} ${styles.view}`}>View</button>
                      </Link>
                      <form action={deleteProduct}>
                        <input type="hidden" name="id" value={item.id}/>
                      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                      </form>
                    </td>
                </tr>

                ))
              }
            </tbody>
        </table>
    </div>
  )
}

export default ProductPage