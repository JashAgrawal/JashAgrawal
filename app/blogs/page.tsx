"use client";

import { fetchBlogPosts, BlogPost, Category } from "@/lib/contentful";
import { useEffect, useState } from "react";
import CategoryFilter from "@/components/category-filter";
import BlogList from "@/components/blog-list";

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [totalPosts, setTotalPosts] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadInitialData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Fetch categories
        // const categoriesData = await fetchCategories();
        // setCategories(categoriesData);

        // Fetch initial posts
        const result = await fetchBlogPosts(0, 6);
        setPosts(result.posts);
        setTotalPosts(result.total);
      } catch (err) {
        console.error("Error loading blog data:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, [selectedCategory]);

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  const fetchMorePosts = async (skip: number): Promise<BlogPost[]> => {
    try {
      const result = await fetchBlogPosts(skip, 6);
      return result.posts;
    } catch (err) {
      console.error("Error fetching more posts:", err);
      return [];
    }
  };

  return (
    <div className="p-4 max-w-6xl mx-auto flex flex-col gap-4">
      {/* <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading>My Blog</SectionHeading>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-2 max-w-2xl mx-auto">
          Explore my thoughts, insights, and experiences on web development,
          technology, and more.
        </p>
      </motion.div> */}

      {isLoading && posts.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>
        </div>
      ) : error ? (
        <div className="text-center py-12 text-red-500">
          <p>{error}</p>
        </div>
      ) : (
        <div className="space-y-8 min-h-[90vh]">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />

          <BlogList
            initialPosts={posts}
            totalPosts={totalPosts}
            fetchMorePosts={fetchMorePosts}
          />
        </div>
      )}
    </div>
  );
}
