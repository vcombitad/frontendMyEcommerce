/**
 * This funcion calculates the final price of an order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {numer} Total Price
 */

export const totalPrice = (products) => {
    let sum=0
    products.forEach(product => sum += product.price )
    return sum
} 