var Observable = require('FuseJS/Observable');
var categories = [
    {
        name: "Pizza",
        image: "Assets/Images/pizza.png",
        dishes:[
            {
                name: "Margarita",
                description: "The pizzas cost only three euros and arrived flopping off of the plates. Literally, flopping. They were huge. I ate every last bite of that pizza and came back for another one the very next day.",
                rating: 5,
                image: "Assets/Images/pizza.png",
                price: 7.50,
                inCart: Observable(false),
            },
            {
                name: "Fruti Di Mare",
                description: "The pizzas cost only three euros and arrived flopping off of the plates. Literally, flopping. They were huge. I ate every last bite of that pizza and came back for another one the very next day.",
                rating: 2,
                image: "Assets/Images/pizza.png",
                price: 9.99,
                inCart: Observable(false),
            }
        ]
    },
    {
        name: "Salads",
        image: "Assets/Images/salad.png",
        dishes:[
            {
                name: "Olivie",
                description: "The pizzas cost only three euros and arrived flopping off of the plates. Literally, flopping. They were huge. I ate every last bite of that pizza and came back for another one the very next day.",
                rating: 3,
                image: "Assets/Images/salad.png",
                price: 19.99,
                inCart: Observable(false),
            }
        ]
    },
    {
        name: "Desserts",
        image: "Assets/Images/dessert.png",
        dishes:[
            {
                name: "Some dessert",
                description: "The pizzas cost only three euros and arrived flopping off of the plates. Literally, flopping. They were huge. I ate every last bite of that pizza and came back for another one the very next day.",
                rating: 4,
                image: "Assets/Images/dessert.png",
                price: 3.99,
                inCart: Observable(false),
            }
        ]
    },
    {
        name: "Pasta",
        image: "Assets/Images/pasta.png",
        dishes:[
            {
                name: "Pasta pasta",
                description: "The pizzas cost only three euros and arrived flopping off of the plates. Literally, flopping. They were huge. I ate every last bite of that pizza and came back for another one the very next day.",
                rating: 3,
                image: "Assets/Images/pasta.png",
                price: 6.99,
                inCart: Observable(false),
            }
        ]
    }
];

categories.forEach(c => c.dishesCount = c.dishes.length);
module.exports.categoriesList = categories;