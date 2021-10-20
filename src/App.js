import './App.css';
import { useContext, useEffect } from "react";
import { UserContext } from './wrappers/UserContext';

import { Switch, Route } from 'react-router-dom'
import { Nav } from './components/Nav';
import { ArticleList } from './components/ArticleList';
import Login from './components/Login';
import { Article } from './components/Article';



function App() {
  const { setUser } = useContext(UserContext);
  useEffect( () => {
    const previousLoggedInUser = sessionStorage.getItem('username')
    if (previousLoggedInUser) setUser(previousLoggedInUser);
  })

  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/'>
          <ArticleList/>
        </Route>

        <Route exact path='/articles/:article_id'>
          <Article/>
        </Route>

        <Route exact path='/login'>
          <Login/>
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
