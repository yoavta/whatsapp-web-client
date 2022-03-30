import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import SignIn from './pages/sign-in';
import Register from './pages/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <SignIn /> */}
          {/* <Register /> */}
          <Route path="/" component={<SignIn/>} />
        </Routes>
      </BrowserRouter>
      
      
        
      
    </div>
  );
}

export default App;
