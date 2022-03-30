import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Redirect, Route, Routes} from "react-router-dom";


import SignIn from './pages/sign-in';
import Register from './pages/register';
import Chat from './pages/chat';
import NavbarMain from './components/navbar.componet';
import {useState} from "react";


function App() {

    const [currentUser, setUser] = useState('');
    function useSuccessful(){

    }



  return (
    <div className="App">

      <BrowserRouter>
                <NavbarMain  currentUser= {currentUser} />
        <div className={"App-header"}>

        <Routes>

          <Route path="/signin" element={<SignIn  currentUser= {currentUser}  setUser = {setUser}  successful={useSuccessful}/> }   />
          <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<Chat currentUser= {currentUser} />  }/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
