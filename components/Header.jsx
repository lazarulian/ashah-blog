import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container md:mx-auto md:px-10 mb-8">
      <div className="md:border-b w-full md:inline-block border-blue-400 pt-8 md:pb-8">
        <div className="md:float-left md:text-left block text-center">
          <Link href="/">
            <span className="transition duration-500 hover:text-yellow-400 cursor-pointer font-bold text-4xl text-white">
              Passing Colors
            </span>
          </Link>
          <br></br>
          <span className="text-yellow-400 text-md font-semibold">
            A blog developed and&nbsp;
          </span>
          <a
            className="text-yellow-400 text-md font-semibold"
            href="/predents-only"
          >
            written
          </a>

          <span className="text-yellow-400 text-md font-semibold">
            &nbsp;by Apurva Shah
          </span>
        </div>
        <div className="hidden md:float-left md:contents">
          <a
            href="https://www.apurvashah.org/"
            class="md:float-right  text-white font-bold py-2 px-4 ml-4 border border-white rounded transition: duration-500 hover:text-yellow-400 hover:border-yellow-400"
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
