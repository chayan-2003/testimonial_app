// src/app/dashboard/page.tsx

'use client';

import React from 'react';
import { SignedIn, SignedOut, RedirectToSignIn, UserButton } from '@clerk/nextjs';
import { Navbar } from '@/components/Navbar';
function Dashboard() {
  return (
    <div>
        <Navbar />
      <SignedIn>
        <h1>Welcome to your Dashboard!</h1>
        {/* UserButton provides user account management options */}
        <UserButton afterSignOutUrl="/" />
        {/* Add more authenticated dashboard content here */}
      </SignedIn>
      <SignedOut>
        {/* Redirects unauthenticated users to the sign-in page */}
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}

export default Dashboard;