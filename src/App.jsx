import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import NavBar from "./pages/NavBar";
import Sidebar from "./pages/Sidebar";
import MainContent from "./pages/MainContent";

function App() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <MainContent />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
