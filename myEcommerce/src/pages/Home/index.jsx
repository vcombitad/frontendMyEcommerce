import { CarShopContext } from "../../Context";
import { useContext } from "react";
import Card from "../../componentes/Card"
import Layout from "../../componentes/Layout"
import ProductDetail from "../../componentes/ProductDetail";

function Home() {
  
  const context= useContext(CarShopContext)
  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      } else {
        return (
          <div>We don't have anything :(</div>
        )
      }
    } else {
      return (
        context.items?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    }
  }
  
    return (        
        <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className="font-medium text-xl ">
          Home
        </h1>
      </div>
      <input 
      type="text" 
      placeholder="Search"
      className="rounded-lg border border-black w-80 p-4 mb-4"
      onChange={(event)=> context.setSearchByTitle(event.target.value)}
      
      />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
      {
         renderView()}
      </div>
      <ProductDetail/>
    </Layout>
  )
}
        
      
  
  export default Home