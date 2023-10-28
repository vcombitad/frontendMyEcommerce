import { createContext, useState , useEffect} from 'react';

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

    //Get Products
    const [items, setItems]= useState(null);

    //
    const [filteredItems, setFilteredItems]= useState(null);

    //Search by title
    const [searchByTitle, setSearchByTitle]= useState(null);
    console.log('searchByTitle: ', searchByTitle);
    
    
    useEffect(()=>{
        fetch('http://localhost:3000/api/v1/products')
          .then(response=>(response.json()))
          .then(data=>setItems(data))
      },[])

      const filteredItemsByTitle= (items, searchByTitle)=>{
        return items?.filter(item=> item.name.toLowerCase().includes(searchByTitle.toLowerCase()))
      }

      useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
      }, [items, searchByTitle])
    

      console.log('filteredItems: ', filteredItems);
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
                closeCheckoutSideMenuOpen,
                items,
                setItems,
                setSearchByTitle,
                searchByTitle,
                filteredItems
            }
        }>
            {children}
        </CarShopContext.Provider>
        
    )
}