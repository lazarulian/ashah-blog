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
          key={"Pilgrim's Paradise"}
          href={"https://genius.com/albums/Daniel-caesar/Pilgrims-paradise"}
        >
          <img
            src={
              "https://images.genius.com/e1e750d796bafaf7e13a41f681c78114.1000x1000x1.jpg"
            }
            alt="Pilgrim's Paradise - Daniel Caesar"
            className="object-fill"
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default AlbumMonth;
