import { FaWindowClose } from "react-icons/fa";
import { useContext } from "react";
import { CarShopContext } from "../../Context";
import OrderCard from "../../componentes/OrderCard";
import './styles.css'

const CheckoutSideMenu=() =>{
    const context= useContext(CarShopContext)
    console.log('CART: ', context.cartProducts)

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-slide-menu flex-col fixed bg-white right-0 border border-black rounded-lg}`}>
            <div className='flex justify-between items-center'>
                <h2 className='font-medium text-xl p-6'>My Order</h2>
                <div>
                    <FaWindowClose className='w-14 cursor-pointer' onClick={()=>{context.closeCheckoutSideMenuOpen()}}/> 
                </div>
                
            </div>
            <div className="px-6 overflow-y-scroll">
                {
                    context.productsCartSave.map((product)=>(
                        <OrderCard 
                        key={product.id}
                        title={product.title}
                        imageUrl={product.image}
                        price={product.price}
                        
                        />
                        )) 
                }
            </div>
            
        </aside>
    )
}

export default CheckoutSideMenu