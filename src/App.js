import React from 'react';
import './App.css';
import Users from './components/users';
import { Switch, Route } from "react-router-dom";
import UserPosts from './components/posts';
import UserComments from './components/comments';


function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/' component={Users}></Route>
        <Route path='/posts/:id' component={UserPosts}></Route>
        <Route path='/comments' component={UserComments}></Route>
      </Switch>

    </div>
  );
}

export default App;
