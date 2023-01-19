import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-12 mb-4">
      <h3 className="text-xl mb-4 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor.pointer block pb-2 mb-2 transition:duration-500 hover:text-indigo-600">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
