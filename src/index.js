const menuLocale = document.querySelector('#ramen-menu')
const detailsLocale = document.querySelector('#ramen-detail')
const ratingLocale = document.querySelector('#rating-display')
const commentLocale = document.querySelector('#comment-display')
const formLocale = document.querySelector('#new-ramen')
function getData(url) {
fetch(url)
.then(res => res.json())
.then(console.log())
.then(menu => menu.forEach(displayRamens))

};

function pushData(ramenObj){
fetch('http://localhost:3000/ramens',{
  method: 'POST',
  headers: {
    'Content-Type': 'application/ json'},
  body:JSON.stringify(ramenObj)
 }) 
}
function displayRamens(ramenObj){
  const ramenIMG = document.createElement('img')
  const imgURL = ramenObj['image']
  ramenIMG.src = imgURL
  ramenIMG.addEventListener('click', function(e){
    detailsLocale.innerHTML = `<img class="detail-image" src=${ramenObj['image']} alt="Picture of Ramen" />
    <h2 class="name">${ramenObj['name']}</h2>
    <h3 class="restaurant">${ramenObj['restaurant']}</h3>
    <button id="delete-button">X</button>`
    ratingLocale.innerHTML = `${ramenObj['rating']}`
    commentLocale.innerHTML = `${ramenObj['comment']}`
    handleDelete()
  })
  menuLocale.append(ramenIMG)
}

formLocale.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formName = document.querySelector('#new-name').value;
  const formRestaurant = document.querySelector('#new-restaurant').value;
  const formRating = document.querySelector('#new-rating').value;
  const formComment = document.querySelector('#new-comment').value;
  const formPicture = document.querySelector('#new-image').value;

  const newRamenObj = {
    name: formName,
    restaurant: formRestaurant,
    image: formPicture,
    rating: formRating,
    comment: formComment,
    
  };
  // push value
  // put values in corresponding elements of ramen card
  // append ramen card to menuLocale
  pushData(newRamenObj);

  displayRamens(newRamenObj);
})

function handleDelete(ramenObj){
  const buttonLocale = document.querySelector('#delete-button')
  buttonLocale.addEventListener ('click', function(){
    const menu = document.querySelectorAll('#ramen-detail')
    const ID = buttonLocale.dataset.ID
    menu.forEach(function(elements){
      elements.innerHTML = ''
      

    })
  })}


getData('http://localhost:3000/ramens');
