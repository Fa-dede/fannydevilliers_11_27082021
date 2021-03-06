import {HashRouter, Route, Switch }from 'react-router-dom'
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Locations from './pages/Locations'
import './styles/index.scss'


function App() {
  return (
    <HashRouter>
      <Switch>
        <Route  path='/' exact component={Home}/>  
        <Route  path='/about' component={About}/>  
        <Route  path='/locations/:id' exact component={Locations}/>
        <Route component={Error}/>
      </Switch>
      
    </HashRouter>
  );
}

export default App;
