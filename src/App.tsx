import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Recommendation } from './pages/Recommendation';
import { ResultPage } from './pages/Result';
import { CropsPage } from './pages/Crops';
import { About } from './pages/About';

// Helper component to reset scroll position on route change
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-emerald-500 selection:text-white">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recommend" element={<Recommendation />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/crops" element={<CropsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

