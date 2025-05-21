import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import booksRouter from './routes/books.js';
import pgclient from './db.js';


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/book', booksRouter);

const PORT = process.env.PORT || 5000;

pgclient.connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening on PORT ${PORT}`);

        });
    })
