import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5x1 font-bold text-white-900 mb-6">
          Inventory Management
        </h1>
        <Link
          href="/sign-in"
          className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
