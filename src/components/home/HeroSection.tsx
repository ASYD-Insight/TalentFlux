import React from 'react';
import { ArrowRight, Users, Briefcase, BarChart3 } from 'lucide-react';
import { Logo } from '../brand/Logo';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <Logo variant="vertical" className="mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}Recruitment{' '}
            </span>
            Process
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline your talent acquisition with AI-powered insights and seamless collaboration tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors">
              Book a Demo
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: 'Smart Talent Matching',
              description: 'AI-powered candidate matching with your job requirements'
            },
            {
              icon: Briefcase,
              title: 'Streamlined Workflow',
              description: 'Automated processes that save time and reduce manual tasks'
            },
            {
              icon: BarChart3,
              title: 'Data-Driven Insights',
              description: 'Real-time analytics to optimize your recruitment strategy'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-10 group-hover:opacity-20 transition-opacity" />
              <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}