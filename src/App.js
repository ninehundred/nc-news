import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Nav } from './components/Nav';
import { ArticleList } from './components/ArticleList';
import Login from './components/Login';
import { Article } from './components/Article';


function App() {
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
