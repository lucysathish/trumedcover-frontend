import React from 'react';
import { Stethoscope, Shield, Users, FileCheck } from 'lucide-react';

const features = [
  {
    name: 'Doctor-Led Recommendations',
    description: 'Every insurance plan is vetted by a medical professional based on your specific health history and needs.',
    icon: Stethoscope,
  },
  {
    name: '100% Unbiased & Spam-Free',
    description: 'We don’t sell your data. No annoying sales calls. Just honest advice from healthcare experts.',
    icon: Shield,
  },
  {
    name: 'Family-First Coverage',
    description: 'Comprehensive plans designed to protect your entire family, including maternity and senior care options.',
    icon: Users,
  },
  {
    name: 'Claims Support Assistance',
    description: 'We don’t just help you buy; we guide you through claims to ensure you get what you paid for.',
    icon: FileCheck,
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Trust TruMedCover?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We bridge the gap between medicine and insurance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-teal-100 text-teal-600 mb-6">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.name}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;