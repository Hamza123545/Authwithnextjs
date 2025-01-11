export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to the NextAuth Example!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          This is a public page accessible to everyone.
        </p>
        <a
          href="/protected"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Go to Protected Page
        </a>
      </div>
    </div>
  );
}
