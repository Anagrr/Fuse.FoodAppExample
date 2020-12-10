export default class CartItem {
    constructor(dish) {
        dish.markInCart();
        this.dish = dish;        
        this.amount = 1;
    }

    increaseAmount(){
        this.amount++;
    }
    decreaseAmount(){
        this.amount--;
    }

    get price() {
        return this.amount * this.dish.price;
    }
}