import express from 'express';
import cors from 'cors'
import newsRouter from "./routers/news";
import commentRouter from "./routers/comment";
import fileDb from "./fileDb";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/news', newsRouter);
app.use('/comments', commentRouter);


const run = async () => {
    await fileDb.init()
    app.listen(port, () => {
        console.log(`server ${port}`);
    });
}

void run()


