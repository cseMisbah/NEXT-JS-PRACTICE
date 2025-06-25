import Link from "next/link";
import React from "react";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "blog title 1",
      description: "blog description 1",
    },
    {
      id: 2,
      title: "blog title 2",
      description: "blog description 2",
    },
  ];

  return (
    <div>
      <main className="mt-10">
        <ul>
          {blogs.map((blog) => {
            return (
              <li className="mb-5" key={blog.id}>
                <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default Blogs;
