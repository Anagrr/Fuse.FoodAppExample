import Dish from "./Dish";

export default class CartItem {
    dish: Dish;
    amount: number;

    constructor(dish: Dish) {
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