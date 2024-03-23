import React from 'react';
import PostList from './features/posts/PostList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './app/store'
import AddPostForm from './features/posts/AddPostForm';
import { SinglePostPage } from './features/posts/SinglePostPage';
import { Navbar } from './app/Navbar';
import { EditPostForm } from './features/posts/EditPostForm';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Provider store={store}>
            <Route
              exact
              path="/"
              render={() => (
                <React.Fragment>
                  <AddPostForm />
                  < PostList />
                </React.Fragment>
              )}
            />
            <Route exact path="/posts/:postId" component={SinglePostPage} />
            <Route exact path="/editPost/:postId" component={EditPostForm} />
          </Provider>
          < Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
