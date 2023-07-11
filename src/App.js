import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import BookingPage from "./BookingPage"



import "./index.css"

import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
