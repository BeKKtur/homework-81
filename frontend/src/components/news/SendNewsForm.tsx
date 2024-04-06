import {Button, Container, Grid, TextField} from "@mui/material";
import {useState} from "react";
import {NewsMutation} from "../../types";
import * as React from "react";

interface Props {
    onSubmit: (news:NewsMutation) => void
}

const SendNewsForm:React.FC<Props> = ({onSubmit}) => {
    const [news, setNews] = useState<NewsMutation>({
        name: '',
        content: '',
    });

    const submitFormHandler = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(news)
    };

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setNews(prevState => {
            return {...prevState, [name]: value};
        });
    };


    return (
        <Container maxWidth='md'>
            <form
                autoComplete="off"
                onSubmit={submitFormHandler}
            >
                <Grid container direction="column" spacing={2}>
                    <Grid item xs>
                        <TextField
                            id="name" label="Name"
                            value={news.name}
                            onChange={inputChangeHandler}
                            name="name"
                            required
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            id="content" label="Content"
                            value={news.content}
                            onChange={inputChangeHandler}
                            name="content"
                            required
                        />
                    </Grid>
                    <Grid item xs>
                        <Button type="submit" color="primary" variant="contained">Send</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default SendNewsForm;