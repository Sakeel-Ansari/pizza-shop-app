//product JS contains the structure of a pizza object
//pizza object - id, name, description, price, rating, image

class Product{
    constructor(id, name, desc, price, url){
        //this-keywork (contains the current calling object reference)
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.url = url;
        this.isAddedInCart=false;

    }

}
export default Product;