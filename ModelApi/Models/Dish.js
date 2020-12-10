export default class Dish {
    constructor(opts) {
        this.name = "";
        this.description = "";
        this.rating = 1;
        this.image = undefined;
        this.price = 0;
        this.inCart = false;

        if(opts) {
            this.name = opts.name || "";
            this.description = opts.description || "";
            this.rating = opts.rating || 1;
            this.image = opts.image;
            this.price = opts.price || 0;
        }        
    }

    markInCart(){
        this.inCart = true;
    }

    markNotInCart(){
        this.inCart = false;
    }
}