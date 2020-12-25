type DishOptions = {
    name?: string
    description?: string
    rating?: number
    image?: string
    price?: number
    inCart?: boolean;
}

export default class Dish {
    name = "";
    description = "";
    rating = 1;
    image?: string;
    price = 0;
    inCart = false;

    constructor(opts?: DishOptions) {
        if (opts) {
            this.name = opts.name || "";
            this.description = opts.description || "";
            this.rating = opts.rating || 1;
            this.image = opts.image;
            this.price = opts.price || 0;
            this.inCart = opts.inCart || false;
        }
    }

    markInCart() {
        this.inCart = true;
    }

    markNotInCart() {
        this.inCart = false;
    }
}