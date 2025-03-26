const pizza = {};

const form = document.querySelector('form');

form.addEventListener("submit", function(event){
        event.preventDefault();
    
        pizza.crust = form.crust.value;
        pizza.sauce = form.sauce.value;
        pizza.cheese = form.cheese.value;
        pizza.topping = form.topping.value;

        localStorage.setItem('pizza', JSON.stringify(pizza));

        alert("Your pizza has been saved! Click Shopping Cart button to view!");
        
        
});

function loadPizza() {
    const savedPizza = JSON.parse(localStorage.getItem('pizza'));

    if (savedPizza) {
      
        form.crust.value = savedPizza.crust || '';
        form.sauce.value = savedPizza.sauce || '';
        form.cheese.value = savedPizza.cheese || '';
        form.topping.value = savedPizza.topping || '';
    }
}


window.onload = loadPizza;

