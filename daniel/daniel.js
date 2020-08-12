// set initial count 
let count = 0;

//select value
const value = document.getElementById("value");
// ^^ Using getElementById Instead of querySelector for an element with an ID is more efficient (although doesn't make a difference for small apps).

// Have a function that updates the value and then the colour.
function updateValue(increment) {
    count += increment; // Increment/decrement the value (tip, incrementing 2 by -1 = 1, so you can use an increment value instead).

    if(count > 0) {
        value.style.color = "green";
    } else if(count < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "white"
    }

    value.textContent = count;
}

function reset() {
    count = 0;
    updateValue(0);
}
