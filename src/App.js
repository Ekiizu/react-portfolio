import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bulma/css/bulma.min.css';

//import
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import RedirectExample from "./pages/RedirectExample";

import ProjectsIndex from "./pages/projects/Index"
import ProjectsShow from "./pages/projects/Show"

//components
import Navbar from './components/Navbar';



const App = () => {
  return (
    <Router>
    <Navbar/>
    
    <Routes>
      <Route path={"/"} element={<Home/>} />
      <Route path={"/about"} element={<About/>} />
      <Route path={"/contact"} element={<Contact/>} />
      <Route path={"/redirect-example"} element={<RedirectExample/>} />

      <Route path={"/projects"} element={<ProjectsIndex/>} />
      <Route path={"/projects/:id"} element={<ProjectsShow/>} />


      <Route path={"/*"} element={<PageNotFound/>} />
    </Routes>
    </Router>
  );
};


export default App;
