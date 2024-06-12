import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/HomePage/Home';

function App() {
  return (
    <BrowserRouter>
    <router>
      <Home/>
    </router>
    </BrowserRouter>
  );
}

export default App;
