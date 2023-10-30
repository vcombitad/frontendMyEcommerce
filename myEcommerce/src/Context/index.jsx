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

    //Search by Category
    const [searchByCategory, setSearchByCategory]= useState(null);
    console.log('searchByTitle: ', searchByTitle);
    
    
    useEffect(()=>{
        fetch('https://backendmyecommerce-production.up.railway.app/api/v1/products')
          .then(response=>(response.json()))
          .then(data=>setItems(data))
      },[])

      const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.name.toLowerCase().includes(searchByTitle.toLowerCase()))
      }
    
      const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
      }
    
      const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
          return filteredItemsByTitle(items, searchByTitle)
        }
    
        if (searchType === 'BY_CATEGORY') {
          return filteredItemsByCategory(items, searchByCategory)
        }
    
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
          return filteredItemsByCategory(items, searchByCategory).filter(item => item.name.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
    
        if (!searchType) {
          return items
        }
      }
    
      useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
      }, [items, searchByTitle, searchByCategory])
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
                filteredItems,
                searchByCategory,
                setSearchByCategory
            }
        }>
            {children}
        </CarShopContext.Provider>
        
    )
}