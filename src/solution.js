/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
let result = 1 ;
for (let items in cart){
  result += cart[items].priceInCents * cart[items].quantity;
}
  return result
}

function printCartInventory(cart) {
  let itemQuantity = "";
  for (let itemKeys in cart) { 
    const array = cart[itemKeys]; 
    const measure = array.quantity; 
    itemQuantity += `${measure}x${itemKeys}\n`;
}
return itemQuantity;
  }

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
