import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getCategories, getCategoryPost } from "../../services";
import {
  PostCard,
  Categories,
  Loader,
  FeaturedPostCard,
} from "../../components";

const CategoryPost = ({ posts, slug, params }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <head>
        {/* General */}
        <title>Cheat Codes</title>
        <meta charSet="utf-8" />
        <meta name="language" content="ES" />
        <meta name="robots" content="index,follow" />
        {/* Apple */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
        {/* Facebook */}
        <meta property="og:title" content="Cheat Codes" />
        <meta property="og:image" content="../../public/wallpaper.png" />
        {/* Twitter */}
        <meta name="twitter:title" content="Cheat Codes" />
        <meta name="twitter:image" content="../../public/wallpaper.png" />
        <meta name="twitter:card" content="../../public/wallpaper.png" />
      </head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {posts.map((post, index) => (
              <div className="ml-7 md:pl-0 w-64 h-64">
                <FeaturedPostCard key={index} post={post.node} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
