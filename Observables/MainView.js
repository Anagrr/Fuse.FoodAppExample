// imports
var Observable = require('FuseJS/Observable');
var categoriesList = require('/Data').categoriesList;
var accounting = require("/Modules/Accounting"); // http://openexchangerates.github.io/accounting.js/

// definitions
var categories = Observable();
categories.addAll(categoriesList);

var pageIndex = Observable(0);
var selectedCategory = Observable();
var cartItems = Observable();
var cartItemsCount = cartItems.count();
var subtotal = Observable(0);
var total = Observable(0);
var taxValue = 1;

// listeners
cartItems.onValueChanged(module, calculateSummury); // re-calculate summary after dish was added to cart

// functions
var goToDetails = function(args) {
    selectedCategory.value = args.data;
    pageIndex.value += 1;  
};

var goBack = function() {
    pageIndex.value -= 1;
};

var goToStart = function() {
    pageIndex.value = 0;  
};

var goToEnd = function() {
    pageIndex.value = 2;  
};

var addToCart = function(args) {
    var dish = args.data;

    var cartItem = { dish, amount : Observable(1) };
    cartItem.amount.onValueChanged(module, calculateSummury); // re-calculate summary after amount of dishes was changed
    cartItems.add(cartItem);

    var index = selectedCategory.value.dishes.indexOf(dish);
    selectedCategory.value.dishes[index].inCart.value = true;
};

function increaseAmount(args) {
    var index = cartItems.indexOf(args.data);
    cartItems.toArray()[index].amount.value++;
}

function decreaseAmount(args) {
    var index = cartItems.indexOf(args.data);
    cartItems.toArray()[index].amount.value--;
}

function calculateSummury() {
    var sub = 0;
    cartItems.forEach(item => {
        sub += item.amount.value * item.dish.price;
    });

    subtotal.value = getPrice(sub);
    total.value = getPrice(sub + taxValue);
}

function checkOut() {
    // clear cart
    cartItems.clear();

    // set dishes inCart status to false to prevent imposibility
    // of select them again in next order
    categories.forEach(ctgr => ctgr.dishes.forEach(d => d.inCart.value = false));
    
    // navigate to main page
    goToStart();
}

function getPrice(value) {
    return accounting.formatMoney(value, "", 2, " ", ".");
}

module.exports = {
    categories,
    pageIndex,
    selectedCategory,
    cartItems,    
    cartItemsCount,
    taxValue,
    subtotal,
    total,
    taxPrice : getPrice(taxValue),
    goToDetails,
    goBack,
    goToStart,
    goToEnd,
    addToCart,
    increaseAmount,
    decreaseAmount,
    checkOut,
};