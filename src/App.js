import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home/Home';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          
          <Route exact path="/">
           <Home></Home>
          </Route>

          <Route  path="/home">
           <Home></Home>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
