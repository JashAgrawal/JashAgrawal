import { fetchBlogPostBySlug } from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const post = await fetchBlogPostBySlug(params.slug);

    if (!post) {
      return notFound();
    }

    return (
      <article className="mx-auto px-4 pb-12 max-w-3xl flex flex-col space-y-4">
        <Link
          href="/blogs"
          className="inline-flex items-center mb-6 text-indigo-600 hover:text-indigo-800 transition-colors dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to blogs
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl capitalize md:text-4xl font-bold mb-4 dark:text-white">
            {post.fields.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between text-gray-600 dark:text-gray-400 mb-6">
            <span className="mr-4 capitalize">{post.fields.slug}</span>
            <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
              {["Web Development", "Technology", "Programming"].map(
                (category, idx) => (
                  <span
                    key={idx}
                    className="text-xs mt-2 px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full"
                  >
                    {category}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {post.fields.image && (
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={`https:${post.fields.image.fields.file.url}`}
              alt={post.fields.title}
              fill
              className="object-fit object-left-top"
              priority
            />
          </div>
        )}
        <div className="text-justify min-h-[60vh] whitespace-break-spaces [&_ul]:list-disc [&_ol]:list-disc [&_td]:border [&_td]:border-disabledColor [&_td_p]:p-2">
          {documentToReactComponents(post.fields.body, {
            preserveWhitespace: true,
          })}
        </div>
      </article>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return notFound();
  }
}
