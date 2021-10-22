import './App.css';
import { useContext, useEffect } from "react";
import { UserContext } from './wrappers/UserContext';
import { Switch, Route } from 'react-router-dom'
import { Nav } from './components/Nav';
import { ArticleList } from './components/ArticleList';
import Login from './components/Login';
import { Article } from './components/Article';
import { NoMatch } from './components/NoMatch';



function App() {
  
  const { setUser } = useContext(UserContext);
  useEffect( () => {
    const previousLoggedInUser = sessionStorage.getItem('username')
    if (previousLoggedInUser) setUser(previousLoggedInUser);
  })

  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&family=Source+Serif+Pro:wght@300&display=swap" rel="stylesheet"/>
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
        
        <Route path="*">
            <NoMatch />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
