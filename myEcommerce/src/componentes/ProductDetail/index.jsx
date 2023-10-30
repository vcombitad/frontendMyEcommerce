
import { FaWindowClose } from "react-icons/fa";
import { useContext } from "react";
import { CarShopContext } from "../../Context";
import './styles.css'

const ProductDetail=()=>{

    const context= useContext(CarShopContext)
    


    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} overflow-y-scroll product-detail flex-col fixed bg-white right-0 border border-black rounded-lg}`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl p-6'>Detail</h2>
                <div>
                    <FaWindowClose className='w-14 cursor-pointer' onClick={()=>{context.closeProductDetail()}}/> 
                </div>
                
            </div>
            <figure>
                    <img 
                    src={context.productShow.image} alt={context.productShow} 
                    className='w-full h-auto rounded-lg'
                    />
                    <p className='flex flex-col mt-5'>
                        <span>${context.productShow.price}</span>
                        <span>{context.productShow.title}</span>
                        <span>{context.productShow.description}</span>
                    </p>
                </figure>
        </aside>
    )
}
export default ProductDetail