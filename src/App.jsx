import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm } from "./components/login/LoginForm";
import { SignupForm } from "./components/signup/SignupForm";
import { Navbar } from "./components/home/Navbar";
import { Home } from "./components/home/Home";
import { Menu } from "./components/home/Menu";
import { Location } from "./components/home/Location";
import { About } from "./components/home/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/home" element={<Navbar />}>
            <Route path="home" element={<Home/>}/>
            <Route path="menu" element={<Menu/>}/>
            <Route path="location" element={<Location/>}/>
            <Route path="about" element={<About/>}/>
          </Route>
          <Route path="*" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
