import mongoose from 'mongoose';

export const connectDB = async () =>{
    try{//localhost = 127.0.0.1
        const url = 'mongodb+srv://CaffeLeBlanc:Caffe.Leblanc.2023@cluster0.tw9qq13.mongodb.net/?retryWrites=true&w=majority'
        await mongoose.connect(url);
        console.log('base de datos conectada')
    }
    catch (error){
        console.log(error);
    }
}