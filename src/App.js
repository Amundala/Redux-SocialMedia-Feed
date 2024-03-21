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

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <Provider store={store}>
                  <AddPostForm />
                  < PostList />
                </Provider>
              </React.Fragment>
            )}
          />
          < Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
