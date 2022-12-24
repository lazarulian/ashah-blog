import { printSchema } from "graphql";
import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections/index";
import React, { useState, useEffect } from "react";

export default function Home({}) {
  const [posts, setPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts();
      setPosts(data);
      setDataLoaded(true);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <head>
        <title>Passing Colors</title>
        <meta charset="utf-8" />
        <meta name="language" content="ES" />
        <meta name="robots" content="index,follow" />
        {/* Apple */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
        {/* Facebook */}
        <meta property="og:title" content="Passing Colors" />
        <meta property="og:image" content="../../public/wallpaper.png" />
        {/* Twitter */}
        <meta name="twitter:title" content="Passing Colors" />
        <meta name="twitter:image" content="../../public/wallpaper.png" />
        <meta name="twitter:card" content="../../public/wallpaper.png" />
        <meta name="description" content="Sharing my journey through life!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {dataLoaded &&
            posts.map((post) => <PostCard post={post.node} key={post.title} />)}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
