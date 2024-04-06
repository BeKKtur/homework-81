import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {useCallback, useEffect} from "react";
import {fetchNewsById} from "../../store/newsThunk";
import { Card, Container, Grid, Typography} from "@mui/material";
import dayjs from "dayjs";
import NewComment from "../comments/NewComment";

const FullPost = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch()
    const fullNews = useAppSelector(state => state.news.newsById);

    const fetchNews = useCallback(async () => {
        dispatch(fetchNewsById(id || ''));
    }, [dispatch, id]);


    useEffect(() => {
        void fetchNews()
    }, [fetchNews]);


    return (
        <Container maxWidth='md' sx={{mt: 8, textAlign: 'left'}}>
            <Grid key={fullNews?.id} sx={{mb: 2}}>
                <Typography variant='h4' sx={{mb: 2}}>
                    {fullNews?.name}
                </Typography>
                <Typography color="text.secondary" sx={{mb: 2}}>
                    {dayjs(fullNews?.date).format('DD-MM-YYYY HH:mm:ss')}
                </Typography>
                <Typography sx={{mb: 2}}>
                    {fullNews?.content}
                </Typography>
                <Typography sx={{mb: 2}}>
                    <Typography variant='h4' >
                        Comments
                    </Typography>
                    {fullNews?.comments.map(news => (
                        <Card key={news.id} sx={{minWidth: 275, mb: 2, padding: 2, textAlign: 'start'}}>
                            <Typography sx={{mb: 1.5}}>
                                {news.name}
                            </Typography>
                            <Typography sx={{mb: 1.5}}>
                                {news.content}
                            </Typography>
                        </Card>
                    ))}
                </Typography>
            </Grid>
            <Typography variant='h4'>
                Add comment
            </Typography>
            <NewComment/>
        </Container>
    );
};

export default FullPost;