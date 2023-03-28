import './App.css';
import Home from './components/page/Home';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App bg-dark">
      <Navbar />
      <Home/>
      {/* <Products/> */}
    </div>
  );
}

export default App;
