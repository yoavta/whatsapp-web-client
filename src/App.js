import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";


import SignIn from './pages/sign-in';
import Register from './pages/register';
import Chat from './pages/chat';
import NavbarMain from './components/navbar.componet';

function App() {
  return (
    <div className="App">
      
      <NavbarMain />

      <BrowserRouter>
        <Routes>
          
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
