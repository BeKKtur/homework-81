import {News} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {deleteNews, fetchNews, fetchNewsById, sendNewsById} from "./newsThunk";

interface NewsState {
    news: News[];
    test: boolean
    newsById: News | null;
    delete: boolean | string;
    fetchLoading: boolean;
    sendNews: boolean;
}

const initialState:NewsState = {
    news: [],
    test: false,
    delete: false,
    fetchLoading: false,
    newsById: null,
    sendNews: false
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchNews.pending, (state) => {
            state.fetchLoading = true;
        }).addCase(fetchNews.fulfilled, (state,{payload: news}) => {
            state.fetchLoading = false;
            state.news = news;
        }).addCase(fetchNews.rejected, (state) => {
            state.fetchLoading = false;
        });

        builder.addCase(deleteNews.pending, (state, action) => {
            state.delete = action.meta.arg
        }).addCase(deleteNews.fulfilled, (state) => {
            state.delete = false
        }).addCase(deleteNews.rejected, (state) => {
            state.delete = false
        });

        builder.addCase(fetchNewsById.pending, (state) => {
            state.test = true;
        }).addCase(fetchNewsById.fulfilled, (state,{payload: news}) => {
            state.newsById = news;
        }).addCase(fetchNewsById.rejected, (state) => {
            state.test = false;
        });

        builder.addCase(sendNewsById.pending, (state) => {
            state.sendNews = true;
        }).addCase(sendNewsById.fulfilled, (state) => {
            state.sendNews = false;
        }).addCase(sendNewsById.rejected, (state) => {
            state.sendNews = false;
        })

    }
});

export const newsReducer = newsSlice.reducer