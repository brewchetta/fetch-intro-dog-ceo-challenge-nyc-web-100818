console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', addDoggos(), false)

document.addEventListener('DOMContentLoaded', listBreeds(), false)

document.addEventListener('DOMContentLoaded', filterBreeds(), false)

function addDoggos() {
  const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
  fetch(imgUrl)
    .then((response) => {
      const parsedResponse = response.json()
      return parsedResponse
    })
    .then((parsedResponse) => {
      const dogImageContainer = document.getElementById('dog-image-container')
      parsedResponse['message'].forEach(function(dogURL) {
        dogImageContainer.innerHTML = dogImageContainer.innerHTML + `<img src='${dogURL}'>`
      })
    })
}

function listBreeds() {
  const breedURL = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedURL)
    .then((response) => {
      const parsedResponse = response.json()
      console.log(parsedResponse)
      return parsedResponse
    })
    .then((parsedResponse => {
      // debugger
      const dogBreeds = document.getElementById('dog-breeds')
      Object.keys(parsedResponse['message']).forEach((breed) => {
        dogBreeds.innerHTML = dogBreeds.innerHTML + `<li>${breed}</li>`
      })
    }))
    .then(() => {
      const dogBreeds = document.getElementById('dog-breeds')
      const breedsArray = Array.from(dogBreeds.children)
      breedsArray.forEach((breed) => {
        breed.addEventListener('click', () => {
          console.log('changing to yellow')
          breed.style = 'color: yellow;'
        })
      })
    })
}


function filterBreeds() {
  const breedDropdown = document.getElementById('breed-dropdown')
  breedDropdown.addEventListener('change', () => {
    const value = breedDropdown.value
    const breeds = Array.from(document.getElementsByTagName('li'))
    console.log(breeds)
    breeds.forEach((breed) => {
      if (breed.innerText[0] === value) {
        breed.style = "display: block"
      } else {
        breed.style = "display: none"
      }
    })
  })
}
