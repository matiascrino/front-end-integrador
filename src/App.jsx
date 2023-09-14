import { useRoutes, Navigate } from "react-router-dom"
import {Header, Footer} from './components/index'
import {Home, Favoritos, Contacto, DetalleDentista } from './routes/index'


function App() {

  const router = useRoutes([
		{ path: "/", element: <Navigate to="/home" /> },
		{ path: "/home", element: <Home />},
    { path: "/dentist/:id", element: <DetalleDentista /> },
		{ path: "/contacto", element: <Contacto /> },
		{ path: "/favs", element: <Favoritos /> },
	]);


  

  return (
    <>
      <Header/>
      {router}
      <Footer/>
    </>
  )
}

export default App
