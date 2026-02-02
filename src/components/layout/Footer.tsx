import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <ShieldCheck className="h-6 w-6 text-teal-500" />
              <span className="font-bold text-xl text-white tracking-tight">TruMedCover</span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              We help you find the right health insurance with physician-guided recommendations. Not a sales agency—your health comes first.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/how-it-works" className="text-sm hover:text-teal-400 transition-colors">How It Works</Link></li>
              <li><Link to="/trust-compliance" className="text-sm hover:text-teal-400 transition-colors">Trust & Compliance</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm hover:text-teal-400 transition-colors">Disclaimer</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-teal-500 mt-0.5" />
                <span className="text-sm">support@trumedcover.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-teal-500 mt-0.5" />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-500 mt-0.5" />
                <span className="text-sm">HSR Layout, Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} TruMedCover. All rights reserved.</p>
          <p className="mt-2">
            Disclaimer: TruMedCover is an advisory platform. Insurance policies are subject to the terms and conditions of the insurance providers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;