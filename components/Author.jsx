import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="grid grid-cols-5 mt-10 mb-4 p-12 rounded-lg bg-slate-600 bg-opacity-60">
      <div className="col-span-1">
        <Image
          alt={author.name}
          unoptimized
          height="100"
          width="100"
          className="rounded-full"
          src={author.photo.url}
        />
      </div>
      <div className="text-center col-span-4">
        <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
        <p className="text-white text-lg">{author.bio}</p>
      </div>
    </div>
  );
};

export default Author;
