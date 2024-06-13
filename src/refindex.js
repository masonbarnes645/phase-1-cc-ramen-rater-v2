// index.js
const menuLocal = document.querySelector("#ramen-menu")
// Callbacks
const handleClick = (ramen) => {
  // !attach event to each image
  // retrieve data from json file
  // !display data from json file in #ramen-detail

const addSubmitListener = () => {
  // Add code
  fetch()
}


function displayRamens(ramenObj){
    const img = document.createElement('img')
    const imgURL = ramenObj['image']
    img.src = imgURL
    menuLocal.append(img)
  }

function getData(url) {
    // Add code
  fetch(url)
  .then(res => res.json())
  .then(menu => menu.forEach(displayRamens))
  
  };

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

getData('http://localhost:3000/ramens')