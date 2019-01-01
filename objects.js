
function total() {
  var total = 0;
  cart.forEach(function(item){
    for(var key in item){
      total+=item[key];
    }
  });
  return total;
}
function removeFromCart(item) {
   var foodChecker= false;
  for(var i = 0;i<cart.length;i++){
    if(cart[i].hasOwnProperty(item)){
        foodChecker=true;
        cart.splice(i,1);
    
 }
}
  
   if(!foodChecker){
    console.log("That item is not in your cart.");
  }
    
  
  return cart;
}
    console.log(removeFromCart("eg"));

function placeOrder(cardNumber) {
  if(arguments.length===0){
    console.log("Sorry , we don't have a credit card on file for you.");
  }
  else if(arguments.length ==1){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}`);
    cart = [];
  }
}