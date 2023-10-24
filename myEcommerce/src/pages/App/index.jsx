import {useRoutes, BrowserRouter} from 'react-router-dom'
import Home from '../Home'
import MyShop from '../myShop'
import NotFound from '../notFound'
import Shop from '../shop'
import SignIn from '../signIn'
import './App.css'

const AppRoutes =()=>{
  let routes=useRoutes([
    { path: '/', element: <Home/>},
    { path: '/my-shop', element: <MyShop/>},
    { path: '/shop', element: <Shop/>},
    { path: '/sign-in', element: <SignIn/>},
    { path: '/*', element: <NotFound/>},
  ])
  return routes
}

const App=()=>{
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}
export default App
