import express from "express";
import fileDb from "../fileDb";
import {newsWithoutId, Comment, commentWithoutId} from "../types";
import {getRawAsset} from "node:sea";

const newsRouter = express.Router();

newsRouter.get('/', async (req, res) => {
    const news = await fileDb.getItem()
   return res.send(news);
});

newsRouter.post('/', async (req, res) => {
    const newsData:newsWithoutId = {
        name: req.body.name,
        content: req.body.content,
    }
    if (!newsData.name || !newsData.content) {
        return res.status(400).json({error:'name or content must be present in the request'});
    }
    const news = await fileDb.addItem(newsData)
    return res.send(news);
});

newsRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const news = await fileDb.getItemById(id)
    return res.send(news);
});

newsRouter.delete('/:id',async (req, res) => {
    const id = req.params.id;
    const news =  await fileDb.delete(id);
    return res.send(news);
});

export default newsRouter;


