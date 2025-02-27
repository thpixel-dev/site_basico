import { createBrowserRouter } from "react-router-dom";
import Avisos from "../pages/Avisos.jsx"
import Produtos from "../pages/Produtos.jsx"
import Home from "../pages/Home.jsx"
import Contato from "../pages/Contato.jsx"

const Router = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/contato", element: <Contato/>},
    {path: "/avisos", element: <Avisos/>},
    {path: "/produtos", element: <Produtos/>},
])

export default Router;