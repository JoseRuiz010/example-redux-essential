import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { PostAuthor } from './PostAuthor';
import { fetchPosts, selectAllPosts } from './postsSlice';
import { useGetPostsQuery } from '../api/apiSlice';
export const PostsList = () => {
  // const { posts, status } = useSelector(selectAllPosts)
  // const dispatch = useDispatch()
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetPostsQuery()

  const renderedPosts = posts?.map((post, i) => (
    <article className="post-excerpt" key={i + post?.id + post?.title}>
      <h3>{post?.id}_{post?.title}</h3>
      <p className="post-content">{post?.content?.substring(0, 100)}</p>
      <PostAuthor userId={post?.user} />
      <Link to={`/posts/${post?.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {isLoading && <p>Loading....</p>}
      {!isLoading && renderedPosts}
    </section>
  )
}
