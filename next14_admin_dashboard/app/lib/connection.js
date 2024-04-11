const mongoose = require('mongoose');

export const connectToDB = async() => {
    const connection = {};

    try{
        if(connection.isConnected) 
        {
            return ;
        }

        const db = await mongoose.connect('mongodb://localhost:27017/dashboard');   
    }
    catch(e){
        console.log(e);
        throw new error(e);
    }
}