import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home/Home';
import ContactMe from './Component/Home/ContactMe/ContactMe';
import AboutMe from './Component/Home/AboutMe/AboutMe';
import Navigation from './Component/Home/Navigation/Navigation';
import ProjectDetails from './Component/ProjectDetails/ProjectDetails';
import Blog from './Component/Blog/Blog';
import NotFound from './Component/NotFound/NotFound';
import Footer from './Component/Home/Footer/Footer';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navigation/>
        <Switch>
          
          <Route exact path="/">
           <Home></Home>
          </Route>

          <Route  path="/home">
           <Home></Home>
          </Route>

          <Route  path="/contact">
          <ContactMe></ContactMe>
          </Route>

          <Route  path="/about">
          <AboutMe></AboutMe>
          </Route>

          <Route  path="/blog">
         <Blog></Blog>
          </Route>

          <Route  path="/project/:id">
         <ProjectDetails></ProjectDetails>
          </Route>
          
          <Route  path="/*">
         <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
