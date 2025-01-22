import React from 'react';
import { books } from './data/books';
import { Bookshelf } from './components/Bookshelf';
import { BookOpenCheck } from 'lucide-react';

export default function App() {
  const shelfNumbers = Array.from(
    new Set(books.map((book) => book.shelf_no))
  ).sort();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}

      <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-8 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center gap-6">
          {/* Replace the BookOpenCheck icon with the university logo */}
          <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
            <img
              src="/uni_logo.png"
              alt="University Logo"
              className="w-42 h-14" // Adjust the size of the logo as needed
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              SAGE University Library
            </h1>
            <p className="text-blue-200 text-lg mt-1">Bhopal</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-12">
        <h2 className="text-2xl font-semibold text-blue-900 mb-12 text-center">
          Digital Library Navigation System
        </h2>
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {shelfNumbers.map((shelfNo) => (
            <div key={shelfNo} className="relative isolate">
              <Bookshelf
                shelfNumber={shelfNo}
                books={books.filter((book) => book.shelf_no === shelfNo)}
              />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-blue-200">
            © 2024 SAGE University, Bhopal. All rights reserved.
          </p>
          <p className="text-blue-300/80 text-sm mt-2">
            Digital Library Navigation System
          </p>
        </div>
      </footer>
    </div>
  );
}
