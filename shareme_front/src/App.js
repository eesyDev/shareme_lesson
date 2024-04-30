import { Routes, Route } from'react-router-dom';

import Home from './pages/Home';
import Pins from './pages/Pins';
import { Navbar } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pins" element={<Pins />} />
      </Routes>
    </div>
  );
}

export default App;
