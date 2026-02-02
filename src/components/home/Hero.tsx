import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-600/20 mb-6">
              <ShieldCheck className="h-4 w-4 mr-2" />
              Trusted by 10,000+ Families
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl mb-6">
              Health Insurance Recommended by <span className="text-teal-600">Doctors</span>, Not Sales Agents.
            </h1>
            
            <p className="text-lg leading-8 text-slate-600 mb-8">
              We analyze your medical history to find the perfect insurance coverage. No spam calls, no hidden clauses—just medically verified protection for you and your family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/medical-review">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white w-full sm:w-auto text-base h-12 px-8">
                  Start Free Medical Review
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8 text-slate-700 border-slate-300 hover:bg-slate-50">
                  How It Works
                </Button>
              </Link>
            </div>
            
            <div className="mt-10 flex items-center gap-x-6">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1559839734-2b71ea86b48e?auto=format&fit=crop&w=64&h=64" alt="Doctor 1" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=64&h=64" alt="Doctor 2" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=64&h=64" alt="Doctor 3" />
              </div>
              <div className="text-sm leading-6 text-slate-600">
                <span className="font-semibold text-slate-900">Verified Doctors</span> review every case.
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl bg-slate-50 p-2 ring-1 ring-slate-200/50 shadow-xl">
               <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                alt="Doctor consulting with patient"
                className="w-full rounded-xl shadow-sm object-cover aspect-[4/3]"
              />
            </div>
             {/* Decorative blob */}
            <div className="absolute -top-12 -right-12 -z-10 h-[300px] w-[300px] bg-teal-400/20 blur-3xl rounded-full mix-blend-multiply opacity-70 animate-blob" />
            <div className="absolute -bottom-12 -left-12 -z-10 h-[300px] w-[300px] bg-blue-400/20 blur-3xl rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;