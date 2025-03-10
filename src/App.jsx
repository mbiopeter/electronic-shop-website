import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';
import UpBar from "./views/components/upBar/UpBar";
import Footer from "./views/components/footer/Footer";
import Home from "./views/pages/home/Home";

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
            <Route path="/" element={<Home />} />
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

