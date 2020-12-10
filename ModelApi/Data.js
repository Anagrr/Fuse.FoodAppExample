import Category from './Models/Category';
import Dish from './Models/Dish';

export default class Data {
    constructor() {
        this.categoriesList = [
            new Category({
                name: "Pizza",
                image: "Assets/Images/pizza.png",
                dishes:[
                    new Dish({
                        name: "Margarita",
                        description: "The pizzas cost only three euros and arrived flopping off of the plates. Literally, flopping. They were huge. I ate every last bite of that pizza and came back for another one the very next day.",
                        rating: 5,
                        image: "Assets/Images/pizza.png",
                        price: 7.50
                    }),
                    new Dish({
                        name: "Fruti Di Mare",
                        description: "The pizzas cost only three euros and arrived flopping off of the plates. Literally, flopping. They were huge. I ate every last bite of that pizza and came back for another one the very next day.",
                        rating: 2,
                        image: "Assets/Images/pizza.png",
                        price: 9.99,
                        inCart: false,
                    })
                ]
            }),
            new Category({
                name: "Salads",
                image: "Assets/Images/salad.png",
                dishes:[
                    new Dish({
                        name: "Olivie",
                        description: "The pizzas cost only three euros and arrived flopping off of the plates. Literally, flopping. They were huge. I ate every last bite of that pizza and came back for another one the very next day.",
                        rating: 3,
                        image: "Assets/Images/salad.png",
                        price: 19.99
                    })                    
                ]
            }),
            new Category({
                name: "Desserts",
                image: "Assets/Images/dessert.png",
                dishes:[
                    new Dish({
                        name: "Some dessert",
                        description: "The pizzas cost only three euros and arrived flopping off of the plates. Literally, flopping. They were huge. I ate every last bite of that pizza and came back for another one the very next day.",
                        rating: 4,
                        image: "Assets/Images/dessert.png",
                        price: 3.99
                    })
                ]
            }),
            new Category({
                name: "Pasta",
                image: "Assets/Images/pasta.png",
                dishes:[
                    new Dish({
                        name: "Pasta pasta",
                        description: "The pizzas cost only three euros and arrived flopping off of the plates. Literally, flopping. They were huge. I ate every last bite of that pizza and came back for another one the very next day.",
                        rating: 3,
                        image: "Assets/Images/pasta.png",
                        price: 6.99
                    })
                ]
            }),
        ]
    }
}