import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import BookingPage from "./BookingPage"
import Login from "./Login"
import Agree from "./Agree"




import "./index.css"

import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/agree" element={<Agree />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
