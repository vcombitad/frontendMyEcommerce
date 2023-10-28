import { createContext, useState } from 'react';

export const CarShopContext= createContext()

export const CarShopProvider=({children})=>{

    // Contador de compras
    const [count, setCount]= useState(0)

    //Detail Product open o close
    const [isProductDetailOpen, setIsProductDetailOpen]= useState(false)
    
    const openProductDetail=()=>{
        setIsProductDetailOpen(true)
    }
    const closeProductDetail=()=>{
        setIsProductDetailOpen(false)
    }

    //checkout side menu open o close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen]= useState(false)
    
    const openCheckoutSideMenuOpen=()=>{
        setIsCheckoutSideMenuOpen(true)
    }
    const closeCheckoutSideMenuOpen=()=>{
        setIsCheckoutSideMenuOpen(false)
    }

    //Product detail mostrando el producto
    const [productShow, setProductShow]= useState({})

    //add products to cart
    const [productsCartSave, setProductsCartSave]= useState([])

    return (
        <CarShopContext.Provider value={
            {
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productShow,
                setProductShow,
                productsCartSave,
                setProductsCartSave,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenuOpen,
                closeCheckoutSideMenuOpen
            }
        }>
            {children}
        </CarShopContext.Provider>
        
    )
}