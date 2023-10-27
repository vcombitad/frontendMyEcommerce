import { useState, useEffect } from "react"
import Card from "../../componentes/Card"
import Layout from "../../componentes/Layout"

function Home() {
  const [items, setItems]= useState(null);

  useEffect(()=>{
    fetch('http://localhost:3000/api/v1/products')
      .then(response=>(response.json()))
      .then(data=>setItems(data))
  },[])
    return (        
        <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
    </Layout>
  )
}
        
      
  
  export default Home