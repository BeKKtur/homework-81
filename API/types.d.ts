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

export type newsWithoutId = Omit<News, 'id', 'date'>

export type commentWithoutId = Omit<Comment, 'id', 'newId'>