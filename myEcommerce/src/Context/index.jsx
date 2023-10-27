import { createContext, useState } from 'react';

export const CarShopContext= createContext()

export const CarShopProvider=({children})=>{
    const [count, setCount]= useState(0)
    console.log('COUNT: ', count);
    return (
        <CarShopContext.Provider value={
            {
                count,
                setCount
            }
        }>
            {children}
        </CarShopContext.Provider>
        
    )
}