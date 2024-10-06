//Controller is a GLue between View and model
//Controller performs the I/O from the UI  

import productOperations from "../services/product-operations.js";

async function loadPizzas(){
    const pizzas= await productOperations.loadProducts();
    console.log('Pizzas are ',pizzas);
    for(let pizza of pizzas){
      preparePizzaCard(pizza);
    }
}
loadPizzas();

/*
<div class="col-4">
                  <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                     
                </div>
*/
// function printTotal(){
//   const sum=printTotal.reduce((acc,curr)=>acc+curr.price,0);
//   return sum;
// }
function addToCart(){
  //this-keyword-current calling object ka reference hota hai
  //console.log("Add to Cart called...",this);
  const currentButton=this;
  const pizzaId= currentButton.getAttribute("product-id");
  productOperations.search(pizzaId);
  console.log("The pizza id is ", pizzaId);
  printBasket();
}
function printBasket(){
  const cartProducts=productOperations.getProductsInCart();
  const basket=document.querySelector('#basket');
  basket.innerHTML=" ";
  for(let product of cartProducts){
    const li=document.createElement("li");
    li.innerText=`Pizza Name: ${product.name} Price: ${product.price}`;
    basket.appendChild(li);
  }
  // const pizzaInCart=productOperations.pizzas.addToCart.forEach(pizza=>{
  //   const pTag=printBasket(pizza);
  //   basket.appendChild(pTag);
  // });
  // const total=printTotal(pizzaInCart);
  // console.log("Total is ",total);
  // const totalPTag=document.createElement("p");
  // totalPTag.innerText=`Total is ${total}`;
  // basket.appendChild(totalPTag);
}

function preparePizzaCard(pizza){
    const outputDiv=document.querySelector("#output");
    const colDiv=document.createElement("div");
    colDiv.className="col-4";
    const cardDiv=document.createElement("div");
    cardDiv.className="card";
    cardDiv.style="width: 18rem;"; 
    colDiv.appendChild(cardDiv);
    const img=document.createElement("img");
    img.src=pizza.url;
    img.className="card-img-top";
    cardDiv.appendChild(img);
    const cardBody=document.createElement("div");
    cardBody.className="card-body";
    cardDiv.appendChild(cardBody);
    const h5=document.createElement("h5");
    h5.className="card-title";
    h5.innerText= pizza.name;
    const pTag=document.createElement("p");
    pTag.className="card-text";
    pTag.innerText=pizza.desc;
    const botton=document.createElement("botton");
    botton.setAttribute("product-id", pizza.id);
    botton.addEventListener("click", addToCart);  //Event bind
    botton.className="btn btn-primary";
    botton.innerText="Add to Cart";
    cardBody.appendChild(h5);
    cardBody.appendChild(pTag);
    cardBody.appendChild(botton);
    outputDiv.appendChild(colDiv);

}