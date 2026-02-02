import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import MedicalReview from '@/pages/MedicalReview';
import TrustCompliance from '@/pages/TrustCompliance';
import HowItWorks from '@/pages/HowItWorks';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-600">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/medical-review" element={<MedicalReview />} />
            <Route path="/trust-compliance" element={<TrustCompliance />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
};

export default App;