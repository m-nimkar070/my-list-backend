import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import dotenv from 'dotenv';
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use("*",cors());

// app.use((req,res, next) => {
//     next(new Error("Not found"))
// });

app.use('/api', routes);


export default app;