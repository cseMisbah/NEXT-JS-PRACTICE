import React from "react";
import { notFound } from "next/navigation";

const BlogPage = ({ params }) => {
  const { id } = params;

  if (id === "3") {
    notFound();
  }

  return <div className="mt-6">The blog id is: {id}</div>;
};

export default BlogPage;
