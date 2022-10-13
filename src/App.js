import Login from './Component/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Component/Dashboard';
import "./App.css";
import Weapons from './Weapon/Weapon';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path='/Weapon' element={<Weapons />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
