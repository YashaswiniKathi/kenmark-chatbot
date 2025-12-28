export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Kenmark ITan Solutions
      </h1>

      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
        One stop shop for all your IT solutions — from development and hosting
        to branding, marketing, and consultancy.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="px-6 py-3 rounded-lg bg-primary text-white font-medium shadow">
          Explore Our Services
        </div>

        <div className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200">
          💬 Chat with our Assistant
        </div>
      </div>

      <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
        Tip: Click the chat icon at the bottom-right to ask questions instantly.
      </p>
    </section>
  );
}
