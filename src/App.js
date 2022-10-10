
import './App.css';
import Login from './Component/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Component/Dashboard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
          <Route path="/Dashboard" element={<Dashboard />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App;
