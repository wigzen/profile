import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProductListingPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import { Navbar } from "./components/layout/Navbar/Navbar";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster />
      <nav>
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <Routes>
          <Route path="/" element={<ProductListingPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<> Yet to developed</>} />
        </Routes>
      </nav>
    </>
  );
}

export default App;
