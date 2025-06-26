import Comments from "@/app/components/comments";
import React, { Suspense } from "react";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComment";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }) {
  const { id } = params;

  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);

  //const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  //const post = await getPost(id);

  const post = await postPromise;

  return (
    <div className="mt-6">
      <h2 className="text-blue-500">{post.title}</h2>
      <p className="mt-3">{post.body}</p>
      <hr />

      <Suspense fallback="<h1>loading comments....</h1>">
        <Comments promise={commentsPromise}></Comments>
      </Suspense>
    </div>
  );
}
