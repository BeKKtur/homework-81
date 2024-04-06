import {useAppDispatch} from "../../app/hooks";
import {NewsMutation} from "../../types";
import {sendNewsById} from "../../store/newsThunk";
import {Container} from "@mui/material";
import CommentsFrom from "./CommentsFrom";
import {useParams} from "react-router-dom";

const NewComment = () => {
    const dispatch = useAppDispatch();
    const {id} = useParams()

    const onFormSubmit = async (newsMutation:NewsMutation) => {
        await dispatch(sendNewsById({...newsMutation, news_id: id}));
    }

    return (
        <Container maxWidth='md'>
            <CommentsFrom onSubmit={onFormSubmit}/>
        </Container>
    );
};

export default NewComment;