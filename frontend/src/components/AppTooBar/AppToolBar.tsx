import {AppBar, Container, Toolbar, Typography, Link, styled, Grid} from "@mui/material";
import {Link as NavLink} from 'react-router-dom';


const Links = styled(Grid)({
    color: 'inherit',
    display: 'flex',
    gap: 10

})
const AppToolBar = () => {
    return (
        <AppBar>
            <Container maxWidth='md'>
                <Toolbar>
                    <Typography component='div'>
                        <Links>
                            <Link to='/' component={NavLink} sx={{color: 'inherit'}}>News</Link>
                        </Links>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default AppToolBar;