import Home from '../Home'
import MyShop from '../myShop'
import NotFound from '../notFound'
import Shop from '../shop'
import SignIn from '../signIn'
import './App.css'

function App() {
  
  return (
    <>
      <div className='bg-orange-300'>
        <Home/>
        <MyShop/>
        <NotFound/>
        <Shop/>
        <SignIn/>
      </div>
    </>
  )
}

export default App
