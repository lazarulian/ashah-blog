import React from "react";
import Link from "next/link";
import Image from "next/image";

const AlbumMonth = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-12 mb-2">
      <h3 className="text-xl mb-4 font-semibold border-b pb-2">
        Album of the Month
      </h3>
      <div className="flex justify-center">
        <Link
          key={"Endless"}
          href={"https://en.wikipedia.org/wiki/Endless_(Frank_Ocean_album)"}
        >
          <img
            src={
              "https://archive.org/download/CDQEndlessFrankOcean/Endless%20Streaming%20Art%20(Iridescent%20Stickers).png"
            }
            className="object-fill"
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default AlbumMonth;
