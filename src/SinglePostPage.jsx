import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { PostAuthor } from './features/posts/PostAuthor'
import { useGetPostQuery } from './features/api/apiSlice'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params
  const { data: post, isLoading, isError } = useGetPostQuery(postId)

  // const post = useSelector(state =>
  //   state.posts.find(post => post.id === postId)
  // )

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <PostAuthor userId={post.user} />
        <br />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}