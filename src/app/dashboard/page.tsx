import React from 'react';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import { Navbar } from '@/components/Navbar';

interface Testimonial {
  id: string;
  content: string;
  senderEmail: string;
  createdAt: string;
}

// Dummy testimonials (replace this with actual API call logic)
const dummyTestimonials: Testimonial[] = [
  {
    id: '1',
    content: 'This app has significantly boosted our client engagement!',
    senderEmail: 'alice@example.com',
    createdAt: '2023-08-01T10:30:00Z',
  },
  {
    id: '2',
    content: 'An invaluable tool for managing and showcasing our customer testimonials.',
    senderEmail: 'bob@example.com',
    createdAt: '2023-08-05T14:15:00Z',
  },
  {
    id: '3',
    content: 'User-friendly and highly effective in gathering meaningful feedback.',
    senderEmail: 'carol@example.com',
    createdAt: '2023-08-10T09:45:00Z',
  },
  // Add more dummy testimonials as needed
];

// Fetch testimonials function
async function fetchTestimonials(): Promise<Testimonial[]> {
  // Replace this with an actual API fetch if needed
  return dummyTestimonials;
}

export default async function Dashboard() {
  const testimonials = await fetchTestimonials();

  return (
    <>
      <Navbar />
      <SignedIn>
        <div className="container mx-auto py-12 px-4 bg-white shadow-lg rounded-lg w-full">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Your Testimonials</h1>
          </div>
          {testimonials.length === 0 ? (
            <p>No testimonials received yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300"
                >
                  <p className="text-gray-700 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-indigo-600 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 17l4 4 4-4m-4-12v16"
                      />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold">{testimonial.senderEmail}</h3>
                      <p className="text-sm text-gray-500">
                        {new Date(testimonial.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
