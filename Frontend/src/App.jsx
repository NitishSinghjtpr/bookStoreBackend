import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Courses from "./component/Courses";
import Signup from "./component/Signup";
import Admin from "./component/Admin";
import Dashboard from "./component/Dashboard";
import Cart from "./component/Cart";
import About from "./component/About";
import Contact from "./component/Contact";
import Profile from "./component/Profile";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
