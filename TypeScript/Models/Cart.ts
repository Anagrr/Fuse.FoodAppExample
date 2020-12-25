import { formatMoney } from '../Modules/Accounting';
import CartItem from "./CartItem";

export default class Cart {
    items: CartItem[] = []
    tax: number = 1

    get itemsCount() {
        return this.items.length;
    }

    get priceSum() {
        let sum = 0;
        this.items.forEach(item => sum += item.price);
        return sum;
    }

    get subtotal() {
       return this.getPrice(this.priceSum);
    }

    get total() {
        return this.getPrice(this.priceSum + this.tax);
    }

    get taxPrice() {
        return this.getPrice(this.tax);
    }

    getPrice(value) {
        return formatMoney(value, "", 2, " ", ".");
    }

    addToCart(args) {
        this.items.push(new CartItem(args.data));
    }
}