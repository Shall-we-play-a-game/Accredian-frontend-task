import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/login' element={<LoginForm />}></Route>
        <Route exact path='/register' element={<RegisterForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
