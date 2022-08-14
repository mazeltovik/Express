import express from "express"
import path from "path"
import cors from 'cors'
import { requestTime,logger } from "./middleware.js";
import serverRoutes from "./routes/servers.js"
const PORT =process.env.PORT?? 3000;
const __dirname = path.resolve();
const app = express();
app.use(cors())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(requestTime);
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(serverRoutes);

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname, 'static','index.html'))
// })


app.listen(PORT,()=>{
    console.log(`Server started ${PORT}`)
});