import React from 'react';
import { GlobalStyle } from './Global.styles'
import { Header } from './components/header/Header'
import { Switch, Route } from 'react-router-dom'
import  Homepage from './pages/homepage/Homepage.jsx'

function App() {
  return (
      <div>
        <GlobalStyle />
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
  );
}

export default App;
