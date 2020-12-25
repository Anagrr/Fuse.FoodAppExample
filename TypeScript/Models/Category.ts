import Dish from "./Dish";

type CategoryOptions = {
    name?: string
    dishes?: Dish[]
    image?: string
}

export default class Category {
    name: string = "";
    dishes: Dish[] = [];
    image?: string;

    constructor(opts?: CategoryOptions) {
        if (opts) {
            this.name = opts.name || "";
            this.dishes = opts.dishes || [];
            this.image = opts.image;
        }
    }

    get dishesCount() {
        return this.dishes.length;
    }
}