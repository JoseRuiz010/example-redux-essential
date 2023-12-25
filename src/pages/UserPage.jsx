import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export const UserPage = ({ match }) => {
  const { id } = match?.params
  const user = useSelector(state => state?.users?.find(user => user.id == id))

  const allposts = useSelector(state => state.posts.posts.filter(p => p.userId == id))

  const postTitles = allposts.map(post => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))
  return (
    <section>
      <h2>{user.name}</h2>
      <ul>{postTitles}</ul>
    </section>
  )
}
