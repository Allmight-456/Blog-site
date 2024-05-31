import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">BlogSite</div>
          <div>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2">
              Sign In
            </button>
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-4">Welcome to BlogSite!</h1>
        <p className="text-lg mb-8">Explore the latest articles and trends in the blogging world.</p>
        
        {/* Interactive Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Latest Blog Post</h2>
            <p className="text-gray-700 mb-4">Discover the most recent developments and thoughts from our talented bloggers. Stay updated with what's new and exciting.</p>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Read More
            </button>
          </div>
          
          {/* Blog Post Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Trending Topics</h2>
            <p className="text-gray-700 mb-4">Stay ahead of the curve with our trending topics section. Find out what's capturing the internet's attention right now.</p>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Explore
            </button>
          </div>
          
          {/* Blog Post Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">Join the Community</h2>
            <p className="text-gray-700 mb-4">Become a part of our vibrant community of readers and writers. Share your thoughts, interact with authors, and contribute to the conversation."</p>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
