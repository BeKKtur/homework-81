import express from "express";
import {commentWithoutId, newsWithoutId} from "../types";
import fileDb from "../fileDb";
import newsRouter from "./news";

const commentRouter = express.Router();

commentRouter.get('/', async (req, res) => {
    return res.send('comment)
});

commentRouter.post('/:id', async (req, res) => {
    const id = req.params.id;
    const commentData:commentWithoutId = {
        name: req.body.name,
        author: req.body.author,
        content: req.body.content
    }

    if (!commentData.author){
        commentData.author = 'Anonymous';
    }

    if (!commentData.name || !commentData.content){
        return res.status(400).json({error:'name or content must be present in the request'});
    }
    const news = await fileDb.addItemById(id,commentData);
    return res.send(news);
})

export default commentRouter;