
import './App.css';
import Navbar from './Component/Navbar';

function App() {

  let monTableau = [0];

  const person = {
    name : 'bob',
    age: 20,
  };

  const Moi = {
    ...person,
    name:'Moi'
  }


  return (
   <div className="App">

    <Navbar test={'pat'}/>
   </div>
  )
}



export default App;
