const savedPizza = JSON.parse(localStorage.getItem('pizza'));

if (savedPizza) {
    console.log(savedPizza); 

    const pizzaDetails = document.createElement('div');
    pizzaDetails.style.border = '5px solid black';
    pizzaDetails.style.padding = '20px';
    pizzaDetails.style.maxWidth = '500px';
    pizzaDetails.style.margin = "auto";
    pizzaDetails.style.marginTop = '80px';
    pizzaDetails.style.marginBottom = '80px';


    pizzaDetails.innerHTML = `
        <h2 style="font-family: Poppins, sans-serif; font-size: 2.5rem;">shopping cart</h2>
        <br>
        <p style="font-family: Poppins, sans-serif; font-size: 1.6rem;"><strong><span style= "color: rgb(240, 29, 29);">crust:</span></strong> ${savedPizza.crust}</p>
        <p style="font-family: Poppins, sans-serif; font-size: 1.6rem;"><strong><span style= "color: rgb(240, 29, 29);">sauce:</span></strong> ${savedPizza.sauce}</p>
        <p style="font-family: Poppins, sans-serif; font-size: 1.6rem;"><strong><span style= "color: rgb(240, 29, 29);">cheese:</span></strong> ${savedPizza.cheese}</p>
        <p style="font-family: Poppins, sans-serif; font-size: 1.6rem;"><strong><span style= "color: rgb(240, 29, 29);">topping:</span></strong> ${savedPizza.topping}</p>
    `;

   
    document.body.appendChild(pizzaDetails);
}

