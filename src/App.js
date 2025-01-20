import { BrowserRouter } from 'react-router-dom';
import FlightRouter from './Router/FlightRouter';
import './App.css';
import { SelectedFlightProvider } from './context/FareContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SelectedFlightProvider>
      <FlightRouter/>
      </SelectedFlightProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;  

