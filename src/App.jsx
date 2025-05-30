import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Collections } from "./pages/Collections";
import ProductDetail from "./pages/ProductDetail";
import Wholesale from "./pages/Wholesale";
import BlogGuides from "./pages/BlogGuides";
import BlogPhin from "./pages/BlogPhin";
import { MainLayout } from "./components/layouts/MainLayout";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/products/buffalo" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pages/wholesale" element={<Wholesale />} />
          <Route path="/blogs/brew-guide" element={<BlogGuides />} />
          <Route
            path="/blogs/brew-guide/vietnamese-phin-filter"
            element={<BlogPhin />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

