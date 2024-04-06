import {useAppDispatch} from "../../app/hooks";
import {useNavigate} from "react-router-dom";
import {NewsMutation} from "../../types";
import {sendNews} from "../../store/newsThunk";
import {Container, Typography} from "@mui/material";
import SendNewsForm from "./SendNewsForm";
const NewNews = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onFormSubmit =  async (newsMutation:NewsMutation) => {
        await dispatch(sendNews(newsMutation));
        navigate('/');
    }

    return (
            <Container maxWidth='md'>
                <Typography variant='h4'>'Send news</Typography>
                <SendNewsForm onSubmit={onFormSubmit}/>
            </Container>
    );
};

export default NewNews;