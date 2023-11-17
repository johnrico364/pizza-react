import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/login/LoginForm";
import { SignupForm } from "./components/signup/SignupForm";
import { Navbar } from "./components/home/Navbar";
import { Home } from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/home" element={<Navbar />}>
            <Route path="home" element={<Home/>}/>
            <Route />
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
