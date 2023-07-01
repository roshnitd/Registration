import {Route, Routes} from "react-router-dom"
import Home from "./Home";
import Login from "./Login";
import Registration from "./Register";
import './App.css';
function App() {
  return (
    
  <Routes>
    <Route path="/" element={<Registration/> } />
    <Route path="/Log" element={<Login/> } />
    <Route path="/register" element={<Home/> } />


  </Routes>
  );
}

export default App;
