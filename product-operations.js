// contains the logic for fetching
//adding, searching, sorting
//deletion, updation
/* it talks to the network layer to bring the JSON and 
   convert the JSON into object and vise-versa 
*/

import Product from "./product.js";
import doNetworkCall from "./api-client.js";

const productOperations = {
    products:[],   //key:value
    search(pizzaId){
        const product=this.products.find(currentProduct => currentProduct.id==pizzaId);
        console.log("Product found",product);
        product.isAddedInCart=true;
        console.log("Array",this.products);
    },
    getProductsInCart(){
        const productInBasket= this.products.filter(product=>product.isAddedInCart);
        return productInBasket;
    },
    async loadProducts(){
        const pizzas = await doNetworkCall();
        const pizzaArray = pizzas['Vegetarian'];
        const productsArray = pizzaArray.map(pizza => {
            const currentPizza = new Product(pizza.id, pizza.name, pizza.menu_description,
                pizza.price, pizza.assets.product_details_page[0].url);
                return currentPizza;
        })
        console.log('Products Array', productsArray)
        this.products=productsArray;
        return productsArray;  //wrap promise
    },
    sortProducts(){

    },
    searchProducts(){

    }

}
export default productOperations;
