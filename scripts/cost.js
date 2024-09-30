function calculateCost() {
    console.log("Function is executed.");

    // Step 1: Get the width, height, and type of tinting film from the user input fields
    var width = parseInt(document.getElementById("width").value);
    var height = parseInt(document.getElementById("height").value);
    var type = document.getElementById("type").value;

    // Step 2: Check if the width or height inputs are not valid numbers
    if (isNaN(width) || isNaN(height)) {
        // If width or height is not a number, display an error message
        document.getElementById("result").innerText = "Please enter valid dimensions.";
    } else {
        // Step 3: Calculate the total area of the window
        var area = width * height;

        // Step 4: Set the cost per square inch based on the type of tinting film selected
        var costPerSquareInch;

        switch (type) {
            case "Privacy Window Film":
                costPerSquareInch = 1.5; // $1.5 per square inch for Privacy Window Film
                break;
            case "Solar Control Window Film":
                costPerSquareInch = 2; // $2 per square inch for Solar Control Window Film
                break;
            case "Safety and Security Film":
                costPerSquareInch = 3; // $3 per square inch for Safety and Security Film
                break;
            default:
                costPerSquareInch = 1; // Default to $1 per square inch if no type matches
                break;
        }

        // Step 5: Calculate the total cost by multiplying the area of the window by the cost per square inch
        var totalPrice = area * costPerSquareInch;

        // Step 6: Display the total cost to the user
        document.getElementById("result").innerText = "Total Cost: £" + totalPrice.toFixed(2);
    }
}

 // JavaScript to change image on hover

// Retrieves the DOM element with ID 'mainImage' and stores it in the mainImage constant.
//  below we're finding and saving a specific image on the webpage into a variable named mainImage, so we can do things with it later in our code.
const mainImage = document.getElementById('mainImage');

// Sets up an event listener for when the mouse moves over the mainImage element.
mainImage.addEventListener('mouseover', function() {
    // Changes the src attribute of mainImage to 'media/images/C-EO.jpg' when hovered over.
    this.src = 'media/images/C-EO.jpg';
    
    // Optionally changes the alt attribute of mainImage to 'C-EO Image' for accessibility.
    this.alt = 'C-EO Image';
});

// Sets up an event listener for when the mouse moves out of the mainImage element.
mainImage.addEventListener('mouseout', function() {
    // Restores the src attribute of mainImage to 'media/images/CEO.jpg' when mouseout occurs.
    this.src = 'media/images/CEO.jpg';
    
    // Optionally restores the alt attribute of mainImage to 'CEO Image'.
    this.alt = 'CEO Image';
});






document.querySelector('.background').addEventListener('mousemove', function(event) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = `${event.clientX - ripple.offsetWidth / 2}px`;
    ripple.style.top = `${event.clientY - ripple.offsetHeight / 2}px`;
    this.appendChild(ripple);
  
    setTimeout(() => {
      ripple.remove();
    }, 1000); // Adjust duration as needed
  });
  


  