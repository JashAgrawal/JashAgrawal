import { createClient } from "contentful";

export type BlogPost = {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    body: any;
    slug: string;
    // content: string;
    summary: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    recommendedPosts: BlogPost[];
    // publishDate: string;
    // author: string;
    // categories: string[];
  };
};

export type Category = {
  sys: {
    id: string;
  };
  name: string;
};

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACEID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY || "",
});

export const fetchData = async (
  type: string,
  otherParams?: object,
  module?: string
) => {
  const res = await client.getEntries({ content_type: type, ...otherParams });
  if (module === "blog") {
    return res.items[0];
  }
  return res.items;
};

export const fetchBlogPosts = async (skip = 0, limit = 6) => {
  const query: any = {
    content_type: "blogPage",
  };

  const response = await client.getEntries(query);
  console.log(response.items);
  return {
    posts: response.items as unknown as any[],
    total: response.total,
    skip,
    limit,
  };
};

export const fetchBlogPostBySlug = async (slug: string) => {
  const response = await client.getEntries({
    content_type: "blogPage",
    "fields.slug": slug,
  });
  // console.log();

  return response.items[0] as unknown as BlogPost;
};

export const fetchCategories = async () => {
  const tags = await client.getTags();
  return tags.items as unknown as Category[];
};

export const getTags = async () => {
  const tags = await client.getTags();
  return tags.items;
};
