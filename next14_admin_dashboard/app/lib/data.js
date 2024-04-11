import { Users,Products } from "./models";
import { connectToDB } from "./connection";

export const fetchUsers = async()=>{
    try{
        connectToDB()
        const users = await Users.find();
        return users
    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch users!")
    }
}

export const fetchUser = async(id)=>{
    try{
        connectToDB()
        const user = await Users.findById(id);
        return user;
    }
    catch(err){
        console.log(err)
        // throw new Error("Failed to fetch user!")
    }
}




export const fetchProducts = async()=>{
    try{
        connectToDB()
        const products = await Products.find();
        return products
    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch products!")
    }
}