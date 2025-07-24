import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors'
import connectDb from './config/mongodb.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';
import dotenv from 'dotenv'

dotenv.config();
const PORT=process.env.PORT || 4000;

const app=express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());


await connectDb();


app.use('/api/user',userRouter);
app.use('/api/image',imageRouter);
app.get('/',(req,res)=>{
    res.send("Api Working")
})
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT,( )=> console.log(`Server Started at ${PORT}`));
