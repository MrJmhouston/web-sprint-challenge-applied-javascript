// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get("https://lambda-times-api.herokuapp.com/topics")
.then(({data}) => {
  tabMaker(data);
//   console.log(data);
//   console.log(data.topics[0])
//   console.log(data.topics[1]);
//   console.log(data.topics[2]);
//   console.log(data.topics[3]);
//   console.log(data.topics[4]);
})
.catch(function(error) {
    console.log('There is an error');
});

const topicsDiv = document.querySelector(".topics");

function tabMaker(info) {

    let tabDiv = document.createElement("div");
    tabDiv.setAttribute('class', 'tab')

    // console.log(tabDiv)

    tabDiv.textContent = newTopic;
    
    topicsDiv.appendChild(tabDiv);
    return tabDiv
}


  const newTopic = [];


newTopic.forEach(topic => {
    axios.get("https://lambda-times-api.herokuapp.com/topics");
    const topicElement = tabMaker(topic.topics)
    console.log(topicElement)
    topicsDiv.appendChild(topicElement);
    
});

