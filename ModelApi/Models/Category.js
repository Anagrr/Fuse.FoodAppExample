export default class Category {
    constructor(opts) {
        
        this.name = "";
        this.dishes = [];
        this.image = undefined;

        if(opts) {
            this.name = opts.name || "";
            this.dishes = opts.dishes || [];
            this.image = opts.image;
        }        
    }

    get dishesCount() {
        return this.dishes.length;
    }
}