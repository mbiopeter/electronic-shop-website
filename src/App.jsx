import React, { useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import UpBar from "./views/components/upBar/UpBar";
import Footer from "./views/components/footer/Footer";
import Home from "./views/pages/home/Home";
import Authentication from "./views/pages/authentication/Authentication";
import Cart from "./views/pages/cart/Cart";
import Abaut from "./views/pages/abaut/Abaut";
import Account from "./views/pages/account/Account";
import Contact from "./views/pages/contact/Contact";
import WishList from "./views/pages/wishList/WishList";
import Billing from "./views/pages/billing/Billing";
import Product from "./views/pages/product/Product";
import Error404 from "./views/pages/error/Error404";
import Category from "./views/pages/category/Category";
import SubCategory from "./views/subCategory/SubCategory";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const NotFound = () => <Error404 />;

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <ScrollToTop />
        <div>
          {/* upbar */}
          <UpBar />
          <Routes>
            {/* Pages routes */}
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/abaut" element={<Abaut />} />
            <Route path="/wishlist" element={<WishList />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/account" element={<Account />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/category/:categoryId/:subcategory" element={<SubCategory />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* footer */}
          <Footer />
        </div>
      </Router>
    </PrimeReactProvider>
  );s
}

export default App;
