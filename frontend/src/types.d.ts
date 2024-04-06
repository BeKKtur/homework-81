export interface News {
    id: string;
    name: string;
    content: string;
    date: string;
    comments: Comment[]
}

export interface Comment {
    id: string;
    newsId: string;
    name: string;
    author: string;
    content: string;
}

export interface NewsMutation {
    news_id?: string
    name: string;
    content: string;
}

export interface CommentMutation {
    name: string;
    content: string;
}