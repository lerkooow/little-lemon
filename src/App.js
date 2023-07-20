import '../src/style/index.css';
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header"
import Footer from "./components/Footer"
import BookingPage from "../src/pages/BookingPage"
import LoginPage from "../src/pages/LoginPage"
import AgreePage from "../src/pages/AgreePage"
import HomePage from "../src/pages/HomePage"


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/agree" element={<AgreePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
