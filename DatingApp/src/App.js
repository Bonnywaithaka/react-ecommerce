import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import ItemBody from "./components/ItemBody";
import NavBar from "./components/NavBar";
import NewPosts from "./components/NewPosts";
import Register from "./components/Register";
import SalesWindow from "./components/SalesWindow";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/home" element={<ItemBody />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addPost" element={<NewPosts />} />
          <Route path="/" element={<SalesWindow />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
