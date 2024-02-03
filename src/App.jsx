import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MainContent from "./pages/MainContent";
import ButtonAppBar from "./pages/NavBar";


function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ButtonAppBar/>
        </Grid>
        <Grid item xs={2}>
          
        </Grid>
        <Grid item xs={4}>
          <MainContent/>
        </Grid>
        <Grid item xs={8}>
          
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
