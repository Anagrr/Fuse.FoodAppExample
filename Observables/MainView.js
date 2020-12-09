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
    if(cartItemsCount.value == 0) return;
    pageIndex.value = 2;  
};

var addToCart = function(args) {
    var dish = args.data;

    cartItems.add({ dish, amount : Observable(1) });

    var index = selectedCategory.value.dishes.indexOf(dish);
    selectedCategory.value.dishes[index].inCart.value = true;
    calculateSummury();
};

function increaseAmount(args) {
    var index = cartItems.indexOf(args.data);
    cartItems.toArray()[index].amount.value++;
    calculateSummury();
}

function decreaseAmount(args) {
    var index = cartItems.indexOf(args.data);
    cartItems.toArray()[index].amount.value--;
    calculateSummury();
}

function calculateSummury() {
    var sub = 0;
    cartItems.forEach(item => {
        sub += item.amount.value * item.dish.price;
    });

    subtotal.value = accounting.formatMoney(sub, "", 2, ".", ",");
    total.value = accounting.formatMoney(sub + taxValue, "", 2, ".", ",");
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

module.exports = {
    categories,
    pageIndex,
    selectedCategory,
    cartItems,    
    cartItemsCount,
    taxValue,
    subtotal,
    total,
    goToDetails,
    goBack,
    goToStart,
    goToEnd,
    addToCart,
    increaseAmount,
    decreaseAmount,
    checkOut,
};