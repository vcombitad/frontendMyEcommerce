import { CarShopContext } from "../../Context";
import { useContext } from "react";
import Card from "../../componentes/Card"
import Layout from "../../componentes/Layout"
import ProductDetail from "../../componentes/ProductDetail";
import Carousel from "../../componentes/Carousel";

function Home() {
  
  const context= useContext(CarShopContext)
  
  const renderView = () => {
    
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
  }
  
    return (        
        <Layout>
          <div></div>
          <Carousel/>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className="font-medium text-xl ">
          Search your product
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