import React, { useState } from 'react'

import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { PostsList } from './features/posts/PostsList'
import { Navbar } from './components/Navbar'
import { AddPostForm } from './AddPostForm';
import { SinglePostPage } from './SinglePostPage';
import { EditPostForm } from './EditPostForm';
import { UsersList } from './pages/UsersList';
import { UserPage } from './pages/UserPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <React.Fragment>
              <AddPostForm />
              <PostsList />
            </React.Fragment>
          )}
        />
        <Route exact path="/posts/:postId" component={SinglePostPage} />
        <Route exact path="/editPost/:postId" component={EditPostForm} />
        <Route exact path="/users" component={UsersList} />
        <Route exact path="/users/:id" component={UserPage} />
      </Switch>
    </Router>
  )
}

export default App
