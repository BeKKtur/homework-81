import {Button, Container, Grid, TextField} from "@mui/material";
import {useState} from "react";
import {NewsMutation} from "../../types";
import * as React from "react";

interface Props {
    onSubmit: (news:NewsMutation) => void
}

const CommentsFrom:React.FC<Props> = ({onSubmit}) => {
    const [comment, setComment] = useState<NewsMutation>({
        name: '',
        content: '',
    });

    const submitFormHandler = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(comment)
    };

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setComment(prevState => {
            return {...prevState, [name]: value};
        });
    };

    return (
        <Container>
            <form
                autoComplete="off"
                onSubmit={submitFormHandler}

            >
                <Grid container direction="column" spacing={2}>
                    <Grid item xs>
                        <TextField
                            id="name" label="Name"
                            value={comment.name}
                            onChange={inputChangeHandler}
                            name="name"
                            required
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            id="content" label="Content"
                            value={comment.content}
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

export default CommentsFrom;