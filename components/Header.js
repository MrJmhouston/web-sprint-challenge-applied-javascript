// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container



function Header() {

    let headerContainer = document.querySelector(".header-container");

    const headerDiv = document.createElement("div");
    headerDiv.setAttribute('class', 'header')
    headerContainer.appendChild(headerDiv);

    const date = document.createElement("span");
    date.setAttribute('class', 'date')
    headerDiv.appendChild(date);
    date.textContent = "March 28, 2020";

    const headerText = document.createElement("h1");
    headerDiv.appendChild(headerText);
    headerText.textContent = "Lambda Times";

    const temp = document.createElement("span");
    temp.setAttribute("class", "temp");
    headerDiv.appendChild(temp);
    temp.textContent = "98°";
    

    return headerContainer

} 

Header()
