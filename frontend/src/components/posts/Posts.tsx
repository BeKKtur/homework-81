import {Button, Card, Container, Grid, Link, Typography} from "@mui/material";
import {Link as NavLink} from 'react-router-dom'
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {useEffect} from "react";
import {deleteNews, fetchNews} from "../../store/newsThunk";
import dayjs from 'dayjs'


const Posts = () => {

    const news = useAppSelector(state => state.news.news);
    const dispatch = useAppDispatch();
    const removeNews = async (id:string) => {
        await dispatch(deleteNews(id));
        await dispatch(fetchNews());
    }


    useEffect(() => {
        dispatch(fetchNews())
    }, [dispatch]);

    return (
        <Container maxWidth='md' sx={{mt:8}}>
            <Grid sx={{display: 'flex', justifyContent: 'space-between', mb: 4}}>
                <Typography variant='h4'>
                    Posts
                </Typography>
                <Typography>
                    <Link to='send' component={NavLink}>Add news</Link>
                </Typography>
            </Grid>

            {news.map(post => (
                <Card key={post.id} sx={{ minWidth: 275, mb: 2, padding: 2, textAlign: 'start'}}>
                    <Typography sx={{ mb: 1.5 }} variant='h5'>
                        {post.name}
                    </Typography>
                    <Typography sx={{display: 'flex', gap: 4}}>
                        <Grid sx={{gap: 12}} color="text.secondary">
                            {dayjs(post.date).format('DD-MM-YYYY HH:mm:ss')}
                        </Grid>
                        <Grid>
                            <Link to={'/news/' + post.id} component={NavLink}>Read full post</Link>
                        </Grid>
                        <Grid>
                            <Button type="submit" color="primary" variant="contained" onClick={() => removeNews(post.id)}>delete</Button>
                        </Grid>
                    </Typography>
                </Card>
            ))}
        </Container>
    );
};

export default Posts;