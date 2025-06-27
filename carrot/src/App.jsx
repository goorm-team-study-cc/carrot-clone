import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ProductList from "./pages/ProductList";
import CarrotMain from "./pages/CarrotMain";
import ProductDetail from "./pages/ProductDetail";
import { Outlet, Route, Routes, Link } from "react-router-dom";
import "./App.css"
function App() {
  return (
    <>
      <Header />

      <nav>
        <Link to="/carrotmain">메인 화면</Link> <br />
        <Link to="/productlist">상품 리스트</Link> <br />
        <Link to="/productdetail/124">상세 페이지</Link>
      </nav>
      <Routes>
        <Route path="/carrotmain" element={<CarrotMain />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetail/:productId" element={<ProductDetail />} />
      </Routes>

      <Outlet />

      <Footer />
      
    </>
  );
}

export default App;
