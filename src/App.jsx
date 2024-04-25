import Navbar from "./components/Navbar"

import { Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Contacto from "./pages/Contacto"
import Blog from "./pages/Blog"
import LayoutPublic from "./layouts/LayoutPublic"
import NotFound from "./pages/NotFound"
import BlogDetails from "./pages/BlogDetails"


const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <h1>App</h1>
      <Routes>
        <Route element={<LayoutPublic />} path="/">
          <Route element={<Inicio />} index></Route>
          <Route element={<Contacto />} path="/contacto"></Route>
          <Route element={<Blog />} path="/blog"></Route>
          <Route element={<BlogDetails />} path="/blog/:id"></Route>
          <Route element={<NotFound />} path="*" />
        </Route>
      </Routes>
    </>
  )
}
export default App
