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

  let jcardDiv = document.createElement("div");
  jcardDiv.setAttribute("class", "card");

  let bcardDiv = document.createElement("div");
  bcardDiv.setAttribute("class", "card");

  let ncardDiv = document.createElement("div");
  ncardDiv.setAttribute("class", "card");

  let tcardDiv = document.createElement("div");
  tcardDiv.setAttribute("class", "card");

  let jQcardDiv = document.createElement("div");
  jQcardDiv.setAttribute("class", "card");
  console.log(jcardDiv);

  let headlineDiv = document.createElement("div");
  headlineDiv.setAttribute("class", "headline");
  

  let authorDiv = document.createElement("div");
  authorDiv.setAttribute("class", "author");

  let imageDiv = document.createElement("div");
  imageDiv.setAttribute("class", "img-container");

  let image = document.createElement("img");

  let authorsName = document.createElement("span");

  info.javascript.forEach((element) => {
      console.log(element)
      let card = document.createElement("div")
      headlineDiv.append(element.headline);
      image.append(element.authorPhoto);
      authorsName.append(element.authorName)
      card.append(headlineDiv);
      card.append(image)
      card.append(authorsName)
      jcardDiv.append(card);
  });

  info.bootstrap.forEach((element) => {
      let card = document.createElement("div")
      headlineDiv.append(element.headline);
      image.append(element.authorPhoto);
      authorsName.append(element.authorName);
      card.append(headlineDiv);
      card.append(image);
      card.append(authorsName);
      bcardDiv.append(card);
      
  });

  info.jquery.forEach((element) => {
      let card = document.createElement("div")
      headlineDiv.append(element.headline);
      image.append(element.authorPhoto);
      authorsName.append(element.authorName);
      card.append(headlineDiv);
      card.append(image);
      card.append(authorsName);
      jQcardDiv.append(card);
      
  });

  info.node.forEach((element) => {
      let card = document.createElement("div")
      headlineDiv.append(element.headline);
      image.append(element.authorPhoto);
      authorsName.append(element.authorName);
      card.append(headlineDiv);
      card.append(image);
      card.append(authorsName);
      ncardDiv.append(card);
      
  });

  info.technology.forEach((element) => {
      let card = document.createElement("div")
      headlineDiv.append(element.headline);
      image.append(element.authorPhoto);
      authorsName.append(element.authorName);
      card.append(headlineDiv);
      card.append(image);
      card.append(authorsName);
      tcardDiv.append(card);
  });

  cardsDiv.append(jcardDiv);
  cardsDiv.append(jQcardDiv);
  cardsDiv.append(ncardDiv);
  cardsDiv.append(tcardDiv);
  cardsDiv.append(bcardDiv);
}
