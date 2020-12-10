import Data from "./Data";
import Cart from "./Models/Cart";
import Category from "./Models/Category";

export default class MainView {
    constructor() {
        this.categories = new Data().categoriesList;
        this.pageIndex = 0;
        this.selectedCategory = new Category();
        this.cart = new Cart();
    }

    // functions
    goToDetails(args) {
        this.selectedCategory = args.data;
        this.pageIndex += 1;  
    };

    goBack() {
        this.pageIndex -= 1;
    };

    goToStart() {
        this.pageIndex = 0;  
    };

    goToEnd() {
        this.pageIndex = 2;  
    };

    checkOut() {
        // clear cart
        this.cart = new Cart();

        // set dishes inCart status to false to prevent imposibility
        // of select them again in next order
        this.categories.forEach(ctgr => ctgr.dishes.forEach(d => d.markNotInCart()));
        
        // navigate to main page
        this.goToStart();
    }
}