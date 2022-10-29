import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'; 
import Form from './Form/form';
import memories from './images/mainmemories.png'; 
import Posts from './Posts/posts';
import useStyles from './styles.js'; 


function App() {
  const classes = useStyles(); 

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" align="right" height="60" /> 
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
            <Posts/>
            </Grid>

             <Grid item xs={12} sm={4}>
            <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>

  );
}

export default App;
