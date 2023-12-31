import {useRoutes, BrowserRouter} from 'react-router-dom'
import { CarShopProvider } from '../../Context'
import Home from '../Home'
import MyShop from '../myShop'
import NotFound from '../notFound'
import Shop from '../shop'
import SignIn from '../signIn'
import Navbar from '../../componentes/Navbar'
import CheckoutSideMenu from '../../componentes/CheckoutSideMenu'
import './App.css'
// import Carousel from '../../componentes/Carousel'

const AppRoutes =()=>{
  let routes=useRoutes([
    { path: '/', element: <Home/>},
    { path: '/vinyl', element: <Home/>},
    { path: '/watch', element: <Home/>},
    { path: '/paint', element: <Home/>},
    { path: '/shelves', element: <Home/>},
    { path: '/my-shop', element: <MyShop/>},
    { path: '/shop', element: <Shop/>},
    { path: '/sign-in', element: <SignIn/>},
    { path: '/*', element: <NotFound/>},
  ])
  return routes
}

const App=()=>{
  
  return (
    <CarShopProvider>
      <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
      {/* <Carousel /> */}
      <CheckoutSideMenu/>
    </BrowserRouter>
    </CarShopProvider>
    
  )
}
export default App
