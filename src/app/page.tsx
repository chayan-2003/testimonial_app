"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import './globals.css';
import { Navbar}  from '@/components/Navbar';

export default function Page() {
  return (
    <>
      <Navbar />
      <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 animate-pulse">Transform Your Business</h1>
          <p className="text-xl mb-6">Leverage powerful testimonials to grow and succeed.</p>
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 transition">
            Get Started
          </Button>
        </div>
      </header>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">What Our Users Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Testimonial Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
              <p className="text-gray-700 mb-4">&quot;This app has revolutionized the way we gather and utilize testimonials. Our business growth is undeniable!&quot;</p>
              <div className="flex items-center">
            
                <div>
                  <h3 className="text-lg font-semibold">Jane Doe</h3>
                  <p className="text-sm text-gray-500">CEO, Acme Corp</p>
                </div>
              </div>
            </div>
            {/* Repeat Testimonial Cards as Needed */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
              <p className="text-gray-700 mb-4">This app has revolutionized the way we gather and utilize testimonials. Our business growth is undeniable!</p>
              <div className="flex items-center">
                
                <div>
                  <h3 className="text-lg font-semibold">John Smith</h3>
                  <p className="text-sm text-gray-500">Marketing Manager, Beta Ltd</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
              <p className="text-gray-700 mb-4">&quot;An essential tool for any business looking to harness the power of customer feedback.&quot;</p>
              <div className="flex items-center">
                
                <div>
                  <h3 className="text-lg font-semibold">John Smith</h3>
                  <p className="text-sm text-gray-500">Marketing Manager, Beta Ltd</p>
                </div>
              </div>
            </div>
            {/* Add more testimonials as needed */}
          </div>
        </div>
      </section>
      <section className="py-16  bg-slate-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-cyan-950">Features</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Feature Card */}
            <div className="w-80 bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
              <svg className="w-12 h-12 text-indigo-600 mb-4 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m-4-12v16" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
              <p className="text-gray-600">Seamlessly integrate with your existing tools and platforms.</p>
            </div>
            {/* Repeat Feature Cards as Needed */}
            <div className="w-80 bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
              <svg className="w-12 h-12 text-indigo-600 mb-4 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4-4h-.01" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
              <p className="text-gray-600">Gain insights with up-to-date analytics and reporting.</p>
            </div>
            <div className="w-80 bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
              <svg className="w-12 h-12 text-indigo-600 mb-4 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
              <p className="text-gray-600">Your testimonials are stored securely with top-notch encryption.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-indigo-600 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Testimonial App. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}