import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';
import UpBar from "./views/components/upBar/UpBar";
import Footer from "./views/components/footer/Footer";
import Categories from "./views/components/categories/Categories";

const NotFound = () => <h2>404 - Page Not Found</h2>;

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <div>
          {/* upbar */}
          <UpBar />
          <Routes>
            {/*Pages routes */}
            <Route path="/" element={<Categories />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* footer */}
          <Footer />
        </div>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;

