import './App.css';
import { useContext, useEffect } from "react";
import { UserContext } from './wrappers/UserContext';
import { Switch, Route } from 'react-router-dom'
import { Nav } from './components/Nav';
import { ArticleList } from './components/ArticleList';
import Login from './components/Login';
import { Article } from './components/Article';
import { Account } from './components/Account';
import { NoMatch } from './components/NoMatch';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLock, faLockOpen, faPencil} from '@fortawesome/free-solid-svg-icons'
import SignUp from './components/SignUp';

library.add(fab, faLock, faLockOpen, faPencil)
function App() {
  const { setUser } = useContext(UserContext);
  useEffect( () => {
    const previousLoggedInUser = sessionStorage.getItem('username')
    if (previousLoggedInUser) setUser(previousLoggedInUser);
  })
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&family=Source+Serif+Pro:wght@300&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,500&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap" rel="stylesheet"></link>
      <Nav/>
      <Switch>
        <Route exact path='/'>
          <ArticleList/>
        </Route>

        <Route exact path='/account'>
          <Account/>
        </Route>

        <Route exact path='/articles/:article_id'>
          <Article/>
        </Route>

        <Route exact path='/signUp'>
          <SignUp/>
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
