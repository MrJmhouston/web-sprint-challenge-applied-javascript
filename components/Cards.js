// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get("https://lambda-times-api.herokuapp.com/articles")
.then((data) => {
    cardMaker(data.data.articles)
    // console.log(data.data.articles)
})
.catch(function(error) {
    console.log('There is an error');
})

const cardsDiv = document.querySelector(".cards-container")



function cardMaker(info) {
    console.log(info)
    console.log(info.javascript[0].authorName)

    // let cardDiv = document.createElement("div")
    // cardDiv.setAttribute('class', 'card')
    // console.log(cardDiv)

    // let headlineDiv = document.createElement("div")
    // headlineDiv.setAttribute("class" ,"headline")
    // headlineDiv.textContent = info.javascript[0].headline;

    // let authorDiv = document.createElement("div")
    // authorDiv.setAttribute('class', 'author')

    // let imageDiv = document.createElement("div")
    // imageDiv.setAttribute("class", "img-container")

    // let image = document.createElement('img')
    // image.setAttribute("src", info.javascript[0].authorPhoto);

    // let authorsName = document.createElement('span')
    // authorsName.textContent = "By { }";

    // info.forEach((element) => {
    //     console.log(element)
    //     let card = document.createElement("div")
    //     card.append(element)
    //     cardDiv.append(card);
    // });

    // cardsDiv.append(cardDiv);


}