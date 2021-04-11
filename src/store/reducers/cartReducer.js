// reducer: an arrow fn that receives state and action
// should return a NEW state

const cartReducer = (state = [], action) => {
    switch (action.type)
    {
        case 'ADD_PRODUCT':
            var copy = [...state];

            let found = false;
            for (let i = 0; i < copy.length; i++){
                let item = copy[i]
                if (item.product.id === action.payload.product.id) {
                    found = true;
                    item.quantity = item.quantity + action.payload.quantity;
                }            
            }

            if(!found) {
                copy.push(action.payload);
            }

            return copy;

            case "REMOVE_PROUDCT":
            //here
                break;

            default:
                return state;
        }
            
};



/**
             *  if this product id (action.payload.product.id) does not exist inside the cart
             *  then add id
             * but if it exists (there is a product on the cart with the same id),
             * then, just inscrease the quantity of the product in the cart
             * 
             * FOR each item inside copy
             *  if(action.payload.product.id === item.product.id)
             *      increase item.quantity
             *  else
             *      push the product to copy
             * 
**/

export default cartReducer; 
