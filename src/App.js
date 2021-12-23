import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home/Home';
import ContactMe from './Component/Home/ContactMe/ContactMe';
import AboutMe from './Component/Home/AboutMe/AboutMe';
import Navigation from './Component/Home/Navigation/Navigation';
import ProjectDetails from './Component/ProjectDetails/ProjectDetails';
import Blog from './Component/Blog/Blog';
import NotFound from './Component/NotFound/NotFound';
import Footer from './Component/Home/Footer/Footer';
import ReactParticles from './Component/Particles/ReactParticles';
import JavaScriptString from './Component/Blog/JavaScriptBlog/JavaScriptString/JavaScriptString';
import ReactArticle from './Component/Blog/ReactBlog/ReactArticle/ReactArticle';
import CssArticle from './Component/Blog/CssBlog/CssArticle/CssArticle';
import HtmlArticle from './Component/Blog/HtmlBlog/HtmlArticle';
import NodeArticle from './Component/Blog/NodeJsBlog/NodeArticle';
import JavaScriptBlogHome from './Component/Blog/JavaScriptBlog/JavaScriptBlogHome/JavaScriptBlogHome';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navigation />
        <ReactParticles></ReactParticles>
        <Routes>
          <Route path="/" element={<Home></Home>}>

          </Route>

          <Route path="/home" element={<Home></Home>}>
          </Route>

          <Route path="/contact" element={<ContactMe></ContactMe>}>
          </Route>

          <Route path="/about" element={<AboutMe></AboutMe>}>
          </Route>

          <Route path="/blog" element={<Blog></Blog>}>
            <Route path="javaScript" element={<JavaScriptBlogHome></JavaScriptBlogHome>}></Route>
            <Route path="react" element={<ReactArticle></ReactArticle>}></Route>
            <Route path="css" element={<CssArticle></CssArticle>}></Route>
            <Route path="html" element={<HtmlArticle></HtmlArticle>}></Route>
            <Route path="node" element={<NodeArticle></NodeArticle>}></Route>
          </Route>

          <Route path="/project/:id" element={<ProjectDetails></ProjectDetails>}>
          </Route>

          <Route path="/*" element={<NotFound></NotFound>}>
          </Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
