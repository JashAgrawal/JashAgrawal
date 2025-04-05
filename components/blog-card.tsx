"use client";

import { BlogPost } from "@/lib/contentful";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCursor } from "@/context/cursor-context";
// import { formatDate } from "@/lib/utils";

type BlogCardProps = {
  blog: BlogPost;
  index: number;
};

export default function BlogCard({ blog, index }: BlogCardProps) {
  const { projectEnter, makeDefault } = useCursor();

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => projectEnter("Read more ...")}
      onMouseLeave={() => makeDefault()}
    >
      <Link href={`/blogs/${blog.fields.slug}`}>
        <div className="rounded-none overflow-hidden hover:shadow-md dark:hover:shadow-xl transition-all duration-300 h-full hover:bg-white/10 dark:hover:bg-black/10">
          <div className="relative h-48 w-full">
            <Image
              src={
                blog.fields.image?.fields.file.url
                  ? `https:${blog.fields.image.fields.file.url}`
                  : "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
              }
              alt={blog.fields.title}
              fill
              className="object-cover object-left-top"
            />
          </div>
          <div className="px-1 py-5">
            <div className="flex justify-between items-center mb-2">
              {/* <span className="text-sm text-gray-500 dark:text-gray-400">
                {blog.fields.publishDate}
              </span> */}
              <div className="flex space-x-2">
                {/* {blog.fields.categories.map((category, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full"
                  >
                    {category}
                  </span>
                ))} */}
              </div>
            </div>
            <h3 className="text-xl truncate capitalize font-bold mb-2 group-hover:text-indigo-600 transition-colors duration-200 dark:group-hover:text-indigo-400">
              {blog.fields.title}
            </h3>
            <p className="text-gray-600 truncate mt-2 capitalize text-sm line-clamp-3 dark:text-gray-300">
              {blog.fields.summary} ...
            </p>
            <div className="mt-4 flex flex-row-reverse justify-between items-end gap-0.5">
              <span className="text-indigo-600 font-medium text-xs group-hover:underline dark:text-indigo-400">
                Read more
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
