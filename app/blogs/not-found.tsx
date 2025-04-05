import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-3xl font-bold mb-4 dark:text-white">Blog Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        The blog post you're looking for doesn't exist or has been removed.
      </p>
      <Link
        href="/blogs"
        className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors dark:bg-indigo-500 dark:hover:bg-indigo-600"
      >
        Back to Blogs
      </Link>
    </div>
  );
}
