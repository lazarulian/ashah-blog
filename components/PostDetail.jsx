import React from "react";
import moment from "moment";
import { RichText } from "@graphcms/rich-text-react-renderer";

const PostDetail = ({ post }) => {
  console.log(post.content.raw.children);
  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>

      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className="flex items-center mb-4 lg:md-0 w-full lg:w-auto">
            <img
              className="align-middle rounded-full"
              alt={post.author.name}
              height="30px"
              width="30px"
              src={post.author.photo.url}
            />
            <p className="inline align-middle text-gray-700 ml-2 mr-2 text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium text-lg text-gray-700 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 inline ml-2 mr-2 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="align-middle">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </span>
          </div>
        </div>
        <div className="lg:pr-5 lg:pl-5">
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          <RichText
            content={post.content.raw.children}
            renderers={{
              // Headings
              h1: ({ children }) => (
                <h1 className="text-4xl leading-normal mt-0 mb-2 font-semibold">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-3xl leading-normal mt-0 mb-2 font-semibold">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl leading-normal mt-0 mb-2 font-semibold">
                  {children}
                </h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-xl leading-normal mt-0 mb-2 font-semibold">
                  {children}
                </h4>
              ),
              h5: ({ children }) => (
                <h5 className="text-lg leading-normal mt-0 mb-2 font-semibold">
                  {children}
                </h5>
              ),
              h6: ({ children }) => (
                <h6 className="text-md leading-normal mt-0 mb-2 font-semibold">
                  {children}
                </h6>
              ),

              // Styles
              bold: ({ children }) => <b>{children}</b>,
              italic: ({ children }) => <em>{children}</em>,
              underline: ({ children }) => <u>{children}</u>,

              // Other Elements
              p: ({ children }) => <p className="mb-8">{children}</p>,
              a: ({ children, href }) => (
                <a className="text-md text-blue-700 mb-8" href={href}>
                  {children}
                </a>
              ),
              code: ({ children }) => (
                <code className="bg-gray-200	 text-black rounded-md p-1">
                  {children}
                </code>
              ),
              code_block: ({ children }) => (
                <div className="bg-gray-200	 text-black rounded-md p-1 ">
                  <p className="break-all">{children}</p>
                </div>
              ),
              ul: ({ children }) => (
                <div>
                  <l1>{children}</l1>
                </div>
              ),
              ol: ({ children }) => (
                <div>
                  <l1>{children}</l1>
                </div>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
