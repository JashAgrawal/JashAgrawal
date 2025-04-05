"use client";

import { BlogPost } from "@/lib/contentful";
import { useEffect, useState } from "react";
import BlogCard from "./blog-card";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type BlogListProps = {
  initialPosts: BlogPost[];
  totalPosts: number;
  fetchMorePosts: (skip: number) => Promise<BlogPost[]>;
};

export default function BlogList({
  initialPosts,
  totalPosts,
  fetchMorePosts,
}: BlogListProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialPosts.length < totalPosts);

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  useEffect(() => {
    setPosts(initialPosts);
    setHasMore(initialPosts.length < totalPosts);
  }, [initialPosts, totalPosts]);

  useEffect(() => {
    const loadMorePosts = async () => {
      if (inView && hasMore && !isLoading) {
        setIsLoading(true);
        try {
          const newPosts = await fetchMorePosts(posts.length);
          if (newPosts.length > 0) {
            setPosts((prevPosts) => [...prevPosts, ...newPosts]);
            setHasMore(posts.length + newPosts.length < totalPosts);
          } else {
            setHasMore(false);
          }
        } catch (error) {
          console.error("Error loading more posts:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    loadMorePosts();
  }, [inView, hasMore, isLoading, posts.length, fetchMorePosts, totalPosts]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <BlogCard key={post.sys.id} blog={post} index={index} />
        ))}
      </div>

      {hasMore && (
        <div ref={ref} className="flex justify-center mt-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 1 : 0 }}
            className="w-12 h-12 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"
          ></motion.div>
        </div>
      )}

      {!hasMore && posts.length > 0 && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-16 text-gray-500 dark:text-gray-400"
        >
          You've reached the end of the list
        </motion.p>
      )}

      {posts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
            No blog posts found
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Try changing your filter criteria
          </p>
        </motion.div>
      )}
    </div>
  );
}
