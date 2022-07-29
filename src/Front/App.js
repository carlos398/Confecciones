import '../App.css';
import '../source/login.css'
import Login from "../function/Login";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UsersList from "../function/UsersList";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login/>}/>
          <Route path={"/UsersList"} element={<UsersList/>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;

