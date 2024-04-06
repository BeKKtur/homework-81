import {createAsyncThunk} from "@reduxjs/toolkit";
import {News, NewsMutation} from "../types";
import axiosApi from "../axiosApi";

export const fetchNews = createAsyncThunk<News[]>(
    'news/fetchNews',
    async () => {
        const response = await axiosApi.get<News[]>('/news');
        return response.data
    }
);

export const fetchNewsById = createAsyncThunk<News, string>(
    'news/fetchNewsById',
    async (id) => {
        const response = await axiosApi.get<News>('/news/' + id);
        return response.data
    }
)

export const deleteNews = createAsyncThunk<void, string>(
    'news/deleteNews',
    async (id) => {
        await axiosApi.delete(`/news/${id}`);
    }
);

export const sendNews = createAsyncThunk<void, NewsMutation>(
    'news/sendNews',
    (newsMutation,) => {
        const serialized = {
            ...newsMutation,
        }

        return axiosApi.post('/news', serialized);
    });

export const sendNewsById = createAsyncThunk<string, NewsMutation>(
    'news/sendNewsById',
    (messageMutation) => {
        const {news_id, ...data} = messageMutation
        return axiosApi.post(`/comments/${news_id}`, data);
    });