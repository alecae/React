import Login from './Component/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Component/Dashboard';
import "./App.css"

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
