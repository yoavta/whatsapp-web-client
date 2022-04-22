import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Redirect, Route, Routes} from "react-router-dom";


import SignIn from './pages/sign-in';
import Register from './pages/register';
import Chat from './pages/chat';
import NavbarMain from './components/navbar.componet';
import {useState} from "react";
import Home from "./pages/home";
import ServiceServer from "./server-service";


function App() {

    const [currentUser, setUser] = useState(null);
    return (<div className="App">
            <div className="App-header">
                <BrowserRouter>
                    <NavbarMain currentUser={currentUser} setUser={setUser} />
                    <Routes>
                        <Route path="/signin" element={<SignIn currentUser={currentUser} setUser={setUser}/>}/>
                        <Route path="/" element={<Home currentUser={currentUser} setUser={setUser}/>}/>
                        <Route path="/register" element={<Register currentUser={currentUser} setUser={setUser}/>}/>
                        <Route path="/chat" element={<Chat currentUser={currentUser}/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>);
}

export default App;
