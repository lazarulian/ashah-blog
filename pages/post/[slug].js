import React from "react";
import { useRouter } from "next/router";
import { getPosts, getPostDetails } from "../../services";

import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Loader,
} from "../../components";

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto px-10 mb-8">
      {/* Meta Tags */}
      <head>
        {/* General */}
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta charset="utf-8" />
        <meta name="language" content="ES" />
        <meta name="robots" content="index,follow" />
        {/* Apple */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
        {/* Facebook */}
        <meta property="og:title" content={post.title} />
        <meta property="og:image" content={post.featuredImage.url} />
        {/* Twitter */}
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:image" content={post.featuredImage.url} />
        <meta name="twitter:card" content={post.featuredImage.url} />
      </head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <PostDetail post={post} />
          <Author author={post.author} />
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
