import './App.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
import CarList from './components/Carlist';

function App() {
  return (
    <div className="App">
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>
            Carshop
          </Typography>
        </Toolbar>
      </AppBar>

      <CarList />

    </div>
  );
}

export default App;
