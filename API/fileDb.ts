import {promises as fs} from 'fs';
import {Comment, commentWithoutId, News, newsWithoutId} from "./types";
import comment from "./routers/comment";
import {ok} from "node:assert";

const filename = 'db.json';

let data:News[] = [];

const fileDb = {
    async init() {
        try {
            const fileContent = await fs.readFile(filename);
            data = JSON.parse(fileContent.toString());
        } catch (e) {
            data = []
        }
    },
    async getItem() {
        return data
    },

    async getItemById(id: string) {
        return data.find(news => news.id === id);
    },

    async addItemById(id: string, item:commentWithoutId ) {
        const newsId = data.find(news => news.id === id);
        const news = {
            id: crypto.randomUUID(),
            newsId: newsId?.id,
            ...item
        };
        newsId?.comments.push(news);
        await this.save();
        return newsId;
    },
    async addItem(item: newsWithoutId) {
        const news = {
            id: crypto.randomUUID(),
            ...item,
            date: new Date().toISOString(),
            comments: []
        }

        data.push(news);
        await this.save();
        return news;
    },

    async delete(id:string) {
        const deleteNews = data.findIndex(news => news.id === id);
        if (deleteNews !== -1) {
            data.splice(deleteNews, 1)
        }
    },

    async save() {
        await fs.writeFile(filename, JSON.stringify(data, null, 2));
    }
}

export default fileDb

