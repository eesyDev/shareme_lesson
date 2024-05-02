import { Routes, Route } from'react-router-dom';

import Home from './pages/Home';
import Pins from './pages/Pins';
import { Navbar, Login } from './components';
import './App.css';

function App() {
  return (
    <div className="App bg-gray-50">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
