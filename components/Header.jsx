import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  });
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="transition duration-500 hover:text-yellow-400 cursor-pointer font-bold text-4xl text-white">
              CheatCodes
            </span>
          </Link>
          <br></br>
          <span className="text-yellow-400 text-md font-semibold">
            A blog developed and written by Apurva Shah
          </span>
        </div>
        <div className="hidden md:float-left md:contents">
          <a
            href="https://www.apurvashah.org/"
            class="md:float-right bg-blue-500  text-white font-bold py-2 px-4 ml-4 border border-white rounded transition: duration-500 hover:text-yellow-400"
          >
            Portfolio
          </a>
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer transition duration-500 hover:text-yellow-400">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
