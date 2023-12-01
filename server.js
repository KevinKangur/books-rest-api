import express, { response } from "express";
import {router} from './router/bookroutes.js';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use('/books', router)


app.listen(PORT, () => {
    console.log(`Server listening at port ${ PORT }`);
});
