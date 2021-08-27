import {BrowserRouter, Route, Switch }from 'react-router-dom'
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import './styles/index.scss'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  path='/' exact component={Home}/>  
        <Route  path='/about' component={About}/>  
        <Route component={Error}/>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
