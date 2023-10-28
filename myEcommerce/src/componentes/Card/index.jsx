import { useContext } from "react"
import { CarShopContext } from "../../Context"

import { BsPlusCircleFill } from "react-icons/bs";


const Card =(data)=>{

    const context= useContext(CarShopContext)
    const showProduct= (productDetail)=>{
      context.openProductDetail()
      context.setProductShow(productDetail)
    }
    const addProduct=(event, productsData)=>{
      event.stopPropagation()
      context.setProductsCartSave([...context.productsCartSave, productsData])
      context.setCount(context.count + 1)
      context.openCheckoutSideMenuOpen()
      console.log('CART: ', context.productsCartSave);
    }
    
    return (
        
        <div 
        className='bg-white cursor-pointer w-56 h-60 rounded-lg'
        onClick={()=>showProduct(data.data)}
        >
          <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.name}</span>
            <img className='w-full h-full object-cover rounded-lg' src={data.data.image} alt={data.data.title} />
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
            onClick={(event)=>addProduct(event, data.data) }>
              <BsPlusCircleFill 
                className="w-40" 
                  />
            </div>
          </figure>
          <p className='flex justify-between'>
            <span className='text-sm font-light'>{data.data.title}</span>
            <span className='text-lg font-medium'>${data.data.price}</span>
          </p>
        </div>
      )
    }

export default Card