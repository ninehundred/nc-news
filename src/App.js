import './App.css';
import { useState } from "react";
import {Switch, Route } from 'react-router-dom'
import { Nav } from './components/Nav';
import { ArticleList } from './components/ArticleList';
import Login from './components/Login';
import { Article } from './components/Article';


function App() {

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path='/'>
          <ArticleList isLoading={isLoading} setIsLoading={setIsLoading}/>
        </Route>

        <Route exact path='/articles/:article_id'>
          <Article isLoading={isLoading} setIsLoading={setIsLoading}/>
        </Route>

        <Route exact path='/login'>
          <Login/>
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
