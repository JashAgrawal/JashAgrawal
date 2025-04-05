"use client";

import { Category } from "@/lib/contentful";
import { motion } from "framer-motion";
import { useState } from "react";

type CategoryFilterProps = {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
};

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelect = (category: string | null) => {
    onSelectCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="relative mb-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl dark:text-white">My Blogs</h2>

        {/* Mobile dropdown */}
        <div className="relative md:hidden">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
          >
            {selectedCategory || "All Categories"}
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800"
            >
              <div className="py-1">
                <button
                  onClick={() => handleCategorySelect(null)}
                  className={`block w-full px-4 py-2 text-sm text-left ${
                    selectedCategory === null
                      ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category.sys.id}
                    onClick={() => handleCategorySelect(category.name)}
                    className={`block w-full px-4 py-2 text-sm text-left ${
                      selectedCategory === category.name
                        ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Desktop filter buttons */}
        <div className="hidden md:flex md:flex-wrap md:gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectCategory(null)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              selectedCategory === null
                ? "bg-indigo-600 text-white dark:bg-indigo-500"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            All
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category.sys.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectCategory(category.name)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                selectedCategory === category.name
                  ? "bg-indigo-600 text-white dark:bg-indigo-500"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
