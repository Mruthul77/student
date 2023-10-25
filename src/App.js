import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Product from "./Components/Product/Product";
import Book from "./Components/Book/Book";

function App() {
  return (
    <div >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/book" element={<Book/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
