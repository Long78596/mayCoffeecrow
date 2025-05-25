import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Collections } from "./pages/Collections";
import ProductDetail from "./pages/ProductDetail";
import Wholesale from "./pages/Wholesale";
import BlogGuide from "./pages/BlogGuide";
import BlogPhin from "./pages/BlogPhin";
import { MainLayout } from "./components/layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/products/buffalo" element={<ProductDetail />} />
          <Route path="/pages/wholesale" element={<Wholesale />} />
          <Route path="/blogs/brew-guide" element={<BlogGuide />} />
          <Route
            path="/blogs/brew-guide/vietnamese-phin-filter"
            element={<BlogPhin />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
