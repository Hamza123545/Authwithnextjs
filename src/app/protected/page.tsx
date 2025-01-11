'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function ProtectedPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">Access Denied</h1>
        <p className="mt-2 text-gray-600">You need to be signed in to view this page.</p>
        <button
          onClick={() => signIn()}
          className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4">
        <div className="flex justify-between items-center container mx-auto">
          <h1 className="text-white text-2xl font-bold">My App</h1>
          <div>
            <a href="/" className="text-white mx-4 hover:underline">Home</a>
            <a href="/about" className="text-white mx-4 hover:underline">About</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome, {session.user?.name}!</h1>
          <p className="text-gray-600 mb-4">Email: {session.user?.email}</p>
          {session.user?.image && (
            <div className="mb-4">
              <img
                src={session.user.image}
                alt="User Avatar"
                className="w-20 h-20 rounded-full mx-auto border-2 border-gray-300"
              />
            </div>
          )}
          <button
            onClick={() => signOut()}
            className="w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 My App | All Rights Reserved</p>
      </footer>
    </div>
  );
}
