import '../source/App.css';
import '../source/login.css'
import Login from "../function/Login";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UsersList from "../function/UsersList";
import Home from "./Home";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/UsersList"} element={<UsersList/>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;

