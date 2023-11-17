import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/loginForm/LoginForm";
import { SignupForm } from "./components/signupForm/SignupForm";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/home" element={<Navbar/>}>
            <Route />
            <Route />
          </Route>
          <Route path="*" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
