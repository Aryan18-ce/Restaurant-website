document.addEventListener("DOMContentLoaded", () => {

  const orderButtons = document.getElementsByClassName("order-btn");


  Array.from(orderButtons).forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const confirmOrder = confirm("Do you want to place the order?");
      if (confirmOrder) {
        button.textContent = "Order Placed";
        button.disabled = true;
        button.style.backgroundColor = "pink";

        
        setTimeout(() => {
          window.location.href = "order.html";
        }, 1000);
      }
    });
  });
// for the confirmation message
  const submitBtn = document.getElementById("sub");
  const orderForm = document.getElementById("orderForm");
  const confirmationBox = document.getElementById("orderConfirmation");

  if (submitBtn && orderForm && confirmationBox) {
    submitBtn.addEventListener("click", function (e) {
      e.preventDefault();

  
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const address = document.getElementById("address").value;
      const item = document.getElementById("item").value;
      const quantity = document.getElementById("quantity").value;
      const time = document.getElementById("time").value;
      const payment = document.getElementById("payment").value;

    
      const message = `
        <h3>Order Confirmed!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Item:</strong> ${item} × ${quantity}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Payment:</strong> ${payment === "cod" ? "Cash on Delivery" : "UPI"}</p>
        <p style="color: green;"><strong>Thank you for ordering with us!</strong></p>
      `;

    
      confirmationBox.innerHTML = message;
      confirmationBox.style.display = "block";

     
      orderForm.reset();
    });
  }

  // for the login page
  const logButton = document.getElementById("logi");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  if (logButton && emailInput && passwordInput) {
    logButton.addEventListener("click", () => {
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (email === "abc@gmail.com" && password === "abc23") {
        alert("Login Successful");
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1000);
      } else {
        alert("Wrong credentials");
      }
    });
  }
});
